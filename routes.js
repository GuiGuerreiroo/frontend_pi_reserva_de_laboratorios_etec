import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const routes = (app) => {
    const directory = path.join(__dirname, '/src/app')

    app.get("/", (req, res) => {
        res.sendFile(path.join(directory, 'pages/index.html'))
    })

    app.get("/agendamento", (req, res) => {
        res.sendFile(path.join(directory, 'pages/agendamento.html'))
    })
}
