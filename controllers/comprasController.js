var path = require('path');
var scriptName = path.basename(__filename);

const compras = [];
let id = 0;

exports.save = (req, res) => {
    const { grano, cantidad, plagaViva, plagaMuerta, humedad, impureza,
            ahonagado, inmaduro, picado, manchado, quebrado, productor } = req.body;

    console.log(`${scriptName}-save-request-${JSON.stringify(req.body)}`);

    id = id + 1;

    const raw = {
        id,
        productor,
        grano,
        cantidad,
        plagaViva,
        plagaMuerta,
        humedad,
        impureza,
        ahonagado,
        inmaduro,
        picado,
        manchado,
        quebrado
    };

    compras.push(raw);

    const response = {
        success: true,
        data: raw
    };

    console.log(`${scriptName}-save-response-${JSON.stringify(response)}`);

    return res.json(response);
};
