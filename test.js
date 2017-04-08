const test 		= require("ava");
const readUrls 	= require("./index");

test("returns an array with single url", t => {
	const output = ["www.google.com"]
	const arrays = readUrls('<a href="www.google.com">Google</a>');
	t.deepEqual(arrays, output);
});

test("returns an empty array", t => {
	const output = []
	const arrays = readUrls('<a>Empty</a>');
	t.deepEqual(arrays, output);
});

test("returns an array with two values", t => {
	const output = ["http://theverge.com", "//google.com"]
	const arrays = readUrls('<a href="http://theverge.com">The Verge</a><a href="//google.com">Google</a>');
	t.deepEqual(arrays, output);
});

test("returns an array with two values, using quotes as intended", t => {
	const output = ["http://theverge.com", "//google.com"]
	const arrays = readUrls('<a href="http://theverge.com">The Verge</a><a href="//google.com">Google</a>');
	t.deepEqual(arrays, output);
});
