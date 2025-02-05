import Sun from "../Assets/sun.svg";
import Water from "../Assets/water.svg";

const quantityLabel = {
	1: "peu",
	2: "modérément",
	3: "beaucoup",
};

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3];
	const scaleType =
		careType === "light" ? (
			<img src={Sun} alt="sun-icon" />
		) : (
			<img src={Water} alt="water-icon" />
		);

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			onClick={() =>
				alert(
					`Cette plante requiert ${quantityLabel[scaleValue]}${careType === "light" ? " de lumière" : " d'arrosage"}`,
				)
			}
		>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null,
			)}
		</div>
	);
}

export default CareScale;
