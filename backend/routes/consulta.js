const express = require('express')
const router = express.Router()
const axios = require('axios')

// Consulta de CPF/CNPJ
router.post('/consultar', async (req, res) => {
  const { documento, tipo } = req.body

  if (!documento || !tipo) {
    return res.status(400).json({ erro: 'Dados incompletos' })
  }

  try {
    const response = await axios.post(
      `https://api.apiconsultas.com/${tipo}`,
      { documento },
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY_APICONSULTAS}`
        }
      }
    )

    // Aqui você pode adaptar o retorno
    const dados = response.data
    res.json({ sucesso: true, dados })
  } catch (erro) {
    console.error(erro.response?.data || erro.message)
    res.status(500).json({ erro: 'Erro ao consultar API' })
  }
})

module.exports = router
