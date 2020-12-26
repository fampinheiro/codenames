const { floor, random } = Math;

const randomizer = arr => 
  [...arr].reduceRight((res,_,__,arr) => 
    (res.push(arr.splice(0|Math.random()*arr.length,1)[0]), res),[]);


export default () => {
  const rnd = floor(random() * 2) ? "1" : "2";

  const options = [
    "3",
    rnd,
    ...Array(8).fill().map(_ => "1"),
    ...Array(8).fill().map(_ => "2"), 
    ...Array(7).fill().map(_ => "0")
  ]

  return `${rnd}${randomizer(options).join("")}`
}