var path = require('path');
var scriptName = path.basename(__filename);

const productores = [];
let id = 0;

exports.save = (req, res) => {
    const { productor, predio } = req.body;

    console.log(`${scriptName}-save-request-${JSON.stringify(req.body)}`);

    id = id + 1;

    const raw = {
        id,
        ...productor,
        predio
    };

    productores.push(raw);

    const response = {
        success: true,
        data: raw
    };

    console.log(`${scriptName}-save-response-${JSON.stringify(response)}`);

    return res.json(response);
};

exports.getProductorByFolio = (req, res) => {
    const { folio } = req.params;
    const productor = productores.find(p => p.folio === folio);

    console.log(`${scriptName}-getProductorByFolio-request-${JSON.stringify(req.params)}`);

    if (!productor) {
        const error = {
            success: false,
            message: 'Not found',
            path: 'productores'
        };

        return res.json(error);
    }

    const response = {
        success: true,
        data: productor
    };

    console.log(`${scriptName}-getProductorByFolio-response-${JSON.stringify(response)}`);

    return res.json(response);
};
