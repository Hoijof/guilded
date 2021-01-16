export const cardStyle = {
  width: 200,
  float: 'left',
  margin: 5
};

/*
 * Formats a number and returns it with a given length
*/
export function formatNumberLength(num, length) {
	let r = "" + num;
	while (r.length < length) {
		r = "0" + r;
	}
	return r;
}