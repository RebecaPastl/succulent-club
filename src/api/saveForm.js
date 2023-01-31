import { GoogleSpreadsheet } from 'google-spreadsheet'
//to fill date
import moment from 'moment'

const credentials = require('./succulent-club-credentials.json')

export const saveForm = async (args) => {
    console.log(args)

    // Initialize the sheet - doc ID is the long id in the sheets URL
    const doc = new GoogleSpreadsheet('1_DGOZCJfDrDvZg35RnvydBy8EotOf1DJ7rBz18iccqs');

    // Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
    await doc.useServiceAccountAuth(credentials);

    await doc.loadInfo(); // loads document properties and worksheets
    console.log(doc.title);


   
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        console.log(doc.title)
        
            // client_email: process.env.SHEET_CLIENT_EMAIL,
            // private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)

        // const sheet = doc.sheetsByIndex[1]
        // const data = JSON.parse(req.body)

        // //using spreadsheet title words as reference to add data to spreadsheet
        // await sheet.addRow({
        //     Name: data.Name,
        //     Email: data.Email,
        //     Phone: data.Phone,
        //     Message: data.Message,
        //     'Message date': moment().format('DD/MM/YYYY, HH:mm:ss')
        // })

        // res.end(JSON.stringify({
        //     Name:data.Name
        // }))




}

