// exports.checkRange = (req, res, next) => {
// 	const { result } = res.body;

// 	if (result > 1000000) {
// 		return res.json({
// 			status: `error`,
// 			message: `Overflow`,
// 		});
// 	}

// 	next();
// };

exports.checkType = (req, res, next) => {
	const { num1, num2 } = req.body;

	if (typeof num1 === "string" || typeof num2 === "string") {
		return res.json({
			status: `error`,
			message: `Invalid data types`,
		});
	}

	next();
};
