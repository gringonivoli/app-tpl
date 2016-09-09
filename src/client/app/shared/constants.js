(function() {
    'use strict';

    angular
        .module('app.shared')
        .constant('DICT', {
            'Razon Social': 'Razón Social'
        })
        .constant('formatDate', 'dd/MM/yyyy')
        .constant('tipoProducto', {
            'sinArticulo': 'SIN_ARTICULO',
            'conArticulo': 'CON_ARTICULO'
        })
        .constant('tipoPago', {
            'contado': 'CONTADO',
            'cuentaCorriente': 'CUENTA_CORRIENTE',
            'chequeTercero': 'CHEQUE_TERCERO',
            'chequePropio': 'CHEQUE_PROPIO',
            'tarjeta': 'TARJETA'
        })
        .constant('rol', {
            'vendedor': 'VENDEDOR',
            'administrador': 'ADMINISTRADOR'
        })
        .constant('tipoMotivoMovimientoCaja', {
            'egreso': 'EGRESO',
            'ingreso': 'INGRESO'
        })
        .constant('categoriaTipoComprobante', {
            'factura': 'FACTURA',
            'recibo': 'RECIBO',
            'notaDebito': 'NOTA_DEBITO',
            'notaCredito': 'NOTA_CREDITO',
            'remito': 'REMITO'
        })
        .constant('tipoNotaCredito', {
            'factura': 'FACTURA',
            'producto': 'PRODUCTO',
            'bonificacion': 'BONIFICACION'
        })
        .constant('estadoCuponTarjeta', {
            'cargado': 'CARGADO',
            'liquidado': 'LIQUIDADO',
            'eliminado': 'ELIMINADO'
        })
        .constant('tipoProveedor', {
            'productos': 'PRODUCTOS',
            'servicios': 'SERVICIOS',
            'impuestos': 'IMPUESTOS',
            'gastosGenerales': 'GASTOS_GENERALES'
        })
        .constant('tipoDocumentoInterno', {
            'facturaVenta': {
                nombre: 'FACTURA VENTA',
                codigo: 1
            },
            'reciboPagoVenta': {
                nombre: 'RECIBO PAGO VENTA',
                codigo: 2
            },
            'facturaCompra': {
                nombre: 'FACTURA COMPRA',
                codigo: 3
            },
            'ordenPagoCompra': {
                nombre: 'ORDEN PAGO COMPRA',
                codigo: 4
            },
            'notaCreditoCompra': {
                nombre: 'NOTA CREDITO COMPRA',
                codigo: 5
            },
            'notaCreditoVenta': {
                nombre: 'NOTA CREDITO VENTA',
                codigo: 6
            },
            'notaDebitoCompra': {
                nombre: 'NOTA DEBITO COMPRA',
                codigo: 7
            },
            'notaDebitoVenta': {
                nombre: 'NOTA DEBITO VENTA',
                codigo: 8
            },
            'reciboPagoCompra': {
                nombre: 'RECIBO PAGO COMPRA',
                codigo: 9
            },
            'ordenPagoVenta': {
                nombre: 'ORDEN PAGO VENTA',
                codigo: 10
            },
            'ordenStockManual': {
                nombre: 'ORDEN STOCK MANUAL',
                codigo: 11
            },
            'remitoInterno': {
                nombre: 'REMITO INTERNO',
                codigo: 12
            },
            'movimientoCaja': {
                nombre: 'MOVIMIENTO CAJA',
                codigo: 13
            },
            'cargaChequeManual': {
                nombre: 'CARGA CHEQUE MANUAL',
                codigo: 14
            },
            'aperturaLibroCaja': {
                nombre: 'APERTURA_LIBRO_CAJA',
                codigo: 15
            },
            'correccionStock': {
                nombre: 'CORRECCION STOCK',
                codigo: 16
            },
            'gastoGeneral': {
                nombre: 'GASTO GENERAL',
                codigo: 17
            },
            'impuesto': {
                nombre: 'IMPUESTO',
                codigo: 18
            },
            'servicio': {
                nombre: 'SERVICIO',
                codigo: 19
            },
            'ordenPagoGasto': {
                nombre: 'ORDEN PAGO GASTO',
                codigo: 20
            },
            'presupuestoVenta': {
                nombre: 'PRESUPUESTO VENTA',
                codigo: 21
            }
        });
})();
