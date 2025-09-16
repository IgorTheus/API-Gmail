const express = require("express")
const axios = require("axios")
const cors = require("cors")
const path = require("path")
const { OAuth2Client } = require('google-auth-library')
 
const app = express()
const PORT = 3000
const id = '134654099641-g8a4ns198ns3u8c11shlvidrq67gastu.apps.googleusercontent.com'
const client = new OAuth2Client(id)
 
app.use(cors())          
app.use(express.json())
 
app.use(express.static(path.join(__dirname, "public")))
 
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.post("/auth/google", async (req, res) => {
  try {
    const { token } = req.body
    if (!token) return res.status(400).json({ error: "Token não enviado" })
 
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: id
    })
 
    const payload = ticket.getPayload();
 
    res.json({
      name: payload.name,
      email: payload.email,
      picture: payload.picture,
    })
  } catch (err) {
    res.status(401).json({ error: "Token inválido ou expirado" })
  }
})
 
app.listen(PORT, () => {
  console.log(`🚀 Backend rodando em http://localhost:${PORT}`)
})