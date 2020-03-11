const db = require('../config/db')
module.exports = {
    async create(req, res) {
        try {
            console.log(req.body)
           let { name_donor, age, email, type_blood } = req.body

            if(!name_donor || !age || !email || !type_blood){
                return res.status(400).json({
                    message: "campos devem ser preenchidos",
                    type: "error",
                    status: res.statusCode
                })
            }
           
            name_donor = name_donor.trim()
            email = email.trim()
            type_blood = type_blood.trim()
        
            const createdDonor = await db.query('INSERT INTO tb_donors(name_donor,age,email,type_blood) VALUES($1,$2,$3,$4)', [name_donor, age, email, type_blood])
            if (createdDonor.rowCount > 0) return res.status(201).json({
                message: "doador cadastrado com sucesso",
                type: "success",
                status: res.statusCode
            })
        } catch (e) {
            console.log(e.stack)
            return res.status(500).json({
                message: "erro ao cadastrar usuário",
                type: "error",
                errorCode: e.code
            })
        }
    },
    async index(req, res) {
        try {

            const queryResult = await db.query('SELECT * FROM tb_donors ORDER BY id_donor DESC LIMIT 4')
            if (queryResult.rowCount > 0) {

                return res.status(200).json({
                    donors: queryResult.rows,
                    status: res.statusCode
                })
            }
            return res.status(200).json({
                message: "nenhum doador encontrado",
                type: "success",
                status: res.statusCode
            })

        } catch (e) {
            console.log(e.stack)
            return res.status(500).json({
                message: "erro ao listar doadores",
                type: "error",
                errorCode: e.code
            })
        }
    },
}