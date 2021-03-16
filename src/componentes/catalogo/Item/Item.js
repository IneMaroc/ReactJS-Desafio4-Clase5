import {ReactComponent as ImagenModelo} from './imagen.svg';
import './Item.css'
import ItemCount from './ItemCount';

function Item (){

    return (

        <div className="contenedor">
            <div className="card">
                <ImagenModelo/>
                <div className="card-body">
                    <h5 className="card-title">Producto 1</h5>
                    <p className="card-text">Descripción Producto 1</p>
                    <ItemCount/>
                </div>
                
            </div>
            <div className="card producto2">
                <ImagenModelo/>
                <div className="card-body">
                    <h5 className="card-title">Producto 2</h5>
                    <p className="card-text">Descripción Producto 1</p>
                    <ItemCount/>
                </div>
                
            </div>
            <div className="card producto3">
                <ImagenModelo/>
                <div className="card-body">
                    <h5 className="card-title">Producto 3</h5>
                    <p className="card-text">Descripción Producto 1</p>
                    <ItemCount/>
                </div>
                
            </div>
            <div className="card producto4">
                <ImagenModelo/>
                <div className="card-body">
                    <h5 className="card-title">Producto 4</h5>
                    <p className="card-text">Descripción Producto 1</p>
                    <ItemCount/>
                </div>
                
            </div>
        </div>

    )

}



export default Item