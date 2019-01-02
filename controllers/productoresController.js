const productores = [];
let id = 0;

exports.save = (req, res) => {
    const { productor, predio } = req.body;

    id = id + 1;

    const raw = {
        id,
        ...productor,
        predio
    };

    productores.push(raw);

    const response = {
        success: true,
        data: productores[id]
    };

    return res.json(response);
};

exports.getProductorByFolio = (req, res) => {
    const { folio } = req.params;
    const productor = productores.find(p => p.folio === folio);

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

    return res.json(response);
};
