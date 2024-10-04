import React from "react";
import { List } from "react-virtualized";
import "react-virtualized/styles.css"; // Importing default styles for react-virtualized

const ReactVirtualized = () => {
	const itemCount = 1000;
	const itemHeight = 50;
	const listHeight = 1000;
	const listWidth = 1400;

	const RowWithFields = ({ index, style }) => {
		return (
			<div
				style={{ ...style, display: "flex", gap: "10px", marginBottom: "10px" }}
			>
				{Array.from({ length: 25 }).map((_, fieldIndex) => (
					<input
						key={fieldIndex}
						type='text'
						placeholder={`Field ${fieldIndex + 1}`}
						className='field-hover'
						style={{ width: "30px", padding: "5px", marginBottom: "5px" }}
						defaultValue={`${index + 1}, ${fieldIndex + 1}`}
					/>
				))}
			</div>
		);
	};
	const fieldQuantity = [100, 1000];
	const fieldsQuantityInRow = 25;
	const [fieldCount, setFieldCount] = React.useState(fieldQuantity[0]);
	const [virtualized, setVirtualized] = React.useState(true);
	return (
		<React.Fragment>
			<button
				style={{
					padding: "10px",
					backgroundColor: "white",
					borderRadius: "5px",
					border: "1px solid black",
					boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
					margin: "10px",
					cursor: "pointer",
				}}
				onClick={() => setVirtualized((virtualized) => !virtualized)}
			>
				{" "}
				Switch to {virtualized ? "non-virtualized" : "virtualized"}
			</button>
			{!virtualized ? (
				<React.Fragment>
					<button
						style={{
							padding: "10px",
							backgroundColor: "white",
							borderRadius: "5px",
							border: "1px solid black",
							boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
							margin: "10px",
							cursor: "pointer",
						}}
						onClick={() =>
							setFieldCount(
								(fieldCount) => fieldQuantity.filter((q) => q !== fieldCount)[0]
							)
						}
					>
						{" "}
						Switch to{" "}
						{fieldQuantity.filter((q) => q !== fieldCount)[0] *
							fieldsQuantityInRow}
					</button>
					<div
						onDropCapture={(e) => console.log(e, "dropped")}
						className='custom-scroll-container'
					>
						{Array.from({ length: fieldCount }).map((_, fieldIndex) => (
							<div draggable>
								{Array.from({ length: fieldsQuantityInRow }).map(
									(_, fieldIndex) => (
										<input
											key={fieldIndex}
											type='text'
											placeholder={`Field ${fieldIndex + 1}`}
											className='field-hover'
											style={{
												width: "30px",
												padding: "5px",
												marginBottom: "5px",
											}}
											defaultValue={`${fieldIndex}, ${fieldIndex + 1}`}
										/>
									)
								)}
							</div>
						))}
					</div>
				</React.Fragment>
			) : (
				<div className='custom-scroll-container'>
					<List
						width={listWidth}
						height={listHeight}
						rowHeight={itemHeight}
						rowCount={itemCount}
						rowRenderer={RowWithFields}
					/>
				</div>
			)}
		</React.Fragment>
	);
};

export default ReactVirtualized;
