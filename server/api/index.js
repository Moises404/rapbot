import express from 'express'
import rita from 'rita'
const rs = rita.RiString("The elephant took a bite!");
console.log(rs.features());
console.log(rita.RiTa);
console.log(rita.RiTa.getPhonemes("loose yourself"));
console.log(rita.RiTa.getPosTags("loose yourself"));
console.log(rita.RiTa.getStresses("loose yourself"));
console.log(rita.RiTa.getSyllables("loose yourself"));
console.log(rita.RiTa.getWordCount("loose yourself"));

const lexicon = new rita.RiLexicon();

const rhymes = lexicon.rhymes("cat");

console.log('rhymes', rhymes);

const router = new express.Router()
let snapshot = {'snapshot': 'lol'}

if (process.env.firebase_url) {
  const Firebase = require('firebase')
  const fire = new Firebase(process.env.firebase_url)

  fire.on('value', (data) => {
    snapshot = data.val()
  })
}

router.get('/getDB', (req, res) => {
  res.send(snapshot).end()
})

export default router
