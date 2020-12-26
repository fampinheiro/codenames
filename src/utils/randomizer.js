export default (arr) =>
  [...arr].reduceRight(
    (res, _, __, arr) => (
      res.push(arr.splice(0 | (Math.random() * arr.length), 1)[0]), res
    ),
    []
  );
