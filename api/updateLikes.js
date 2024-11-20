export default function handler(req, res) {
    if (req.method === 'POST') {
        const { hour } = req.body;

        // Обнови данные в JSON-файле или базе данных
        if (!hour) {
            return res.status(400).json({ error: "Hour is required" });
        }

        res.status(200).json({ message: `Like for hour ${hour} recorded!` });
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
