//COLECCION CLIENTES
use('pizzeria')
db.clientes.insertOne({
  name: 'Jairo',
    direccion: 'Calle 53',
    telefono: '32154646'
})
db.clientes.insertOne({
    name: 'Rafael',
      direccion: 'Cra 23',
      telefono: '3213213123',
      correo:'lizeth00@gmail.com'
  })
  use('pizzeria')
db.clientes.insertOne({
  name: 'Andres',
    direccion: 'Calle 234',
    telefono: '2334645'
})
db.clientes.insertOne({
    name: 'Antonia',
      direccion: 'Cra 7',
      
  })

//COLECCION EMPLEADOS
  use('pizzeria')
db.empleados.insertOne({
  name: 'Alfono Gomez',
    direccion: 'Calle 43',
    telefono: '2334645'
})
db.empleados.insertOne({
    name: 'Jairo Prieto',
      direccion: 'Cra 7a'
      
  })
  db.empleados.insertOne({
    name: 'Maicol Lizarazo',
      direccion: 'Calle 57',
      telefono:'2147483647'
      
  })

  //COLECCION MATERIA PRIMA

  use('pizzeria')
db.materiaprima.insertOne({
  name: 'salsas',
    precio: 3000
    
})
db.materiaprima.insertOne({
  name: 'peperoni',
    precio: 5000
    
})
db.materiaprima.insertOne({
    name: 'jamon',
      precio: 4000
      
  })
  db.materiaprima.insertOne({
    name: 'queso',
      precio: 45000
      
  })
  db.materiaprima.insertOne({
    name: 'piña',
      precio: 30000
      
  })
  
  //COLECCION MATERIA HAS PRODUCTOS

use('pizzeria')
db.materiahasproductos.insertOne({
  materiaprima: 11,
    productos: 1010
    
})
db.materiahasproductos.insertOne({
    materiaprima: 12,
      productos: 1111
      
  })
  db.materiahasproductos.insertOne({
    materiaprima: 13,
      productos: 11112
      
  })
  db.materiahasproductos.insertOne({
    materiaprima: 14,
      productos: 11113
      
  })

  //COLECCION PEDIDOS
  use('pizzeria')
db.pedidos.insertOne({
  idpedido: 1,
    tipo: 'domicilio'
    
})
db.pedidos.insertOne({
    idpedido: 2,
      tipo: 'fisico'
      
  })
  db.pedidos.insertOne({
    idpedido: 3,
      tipo: 'domicilio'
      
  })

  //COLECCION PEDIDOS HAS PRODUCTOS
  
  use('pizzeria')
  db.pedidoshasproductos.insertOne({
    idpedido: 1,
      idproducto: 1010,
      cedulacliente:1001,
      empleado:111,
      venta:4000
      
  })
  db.pedidoshasproductos.insertOne({
    idpedido: 2,
      idproducto: 1111,
      cedulacliente:1002,
      empleado:222,
      venta:5000
      
  })
  db.pedidoshasproductos.insertOne({
    idpedido: 3,
      idproducto: 1212,
      cedulacliente:1003,
      empleado:333,
      venta:3500
      
  })

  //COLECCION PRODUCTOS
  use('pizzeria')
  db.productos.insertOne({
    nombre: 'pizza',
      precio: 4000
      
  })
  db.productos.insertOne({
    nombre: 'hamburguesa',
      precio: 6000
      
  })
  db.productos.insertOne({
    nombre: 'perro',
      precio: 4000
      
  })
  db.productos.insertOne({
    nombre: 'arepa',
      precio: 1500
      
  })



