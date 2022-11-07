function Productos_ejemplo(props){
    return(
    <div class=""> 
        <div class="caption">
            {/*--NOMBRE DEL PRODUCTO--*/}
                <div class="nombre" title="1/4 de pollo pio con todo" onclick="">
                    <span class="txt_nombre_plato">
                        <label style="color: red;" id="label_nom_prod">
                        1/4 de pollo pio con todo                                             
                                                    {/*--<label style="color: red;"></label>--*/}
                        </label>
                    </span>
                </div>
            {/*--FIN NOMBRE--*/}
            
            {/*--DISCRIPCION DEL PRODUCTO--*/}
            <div class="descrip_p" style="font-size: 15px;">
                <b class="txt_descripcion_plato"> 2 presas de pollo, consomé, arroz, papa chips o cocida, ensalada</b>
            </div>
        <div/>
    </div>
    </div>

    
    );

}

export default Productos_ejemplo;