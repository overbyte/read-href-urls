const readUrls = (html) => {
    const test = /href="([^"]+)"/gi;
    const out = [];
    let arr;
    while ((arr = test.exec(html)) != null) {
        out.push(arr[1]);
    }
    return out;
}

module.exports = readUrls;
