function ProductImages(){
    return(
        <div class="col-12 col-md-6">
        <div class="single_product_thumb">
            <div id="product_details_slider" class="carousel slide" data-ride="carousel">

                <ol class="carousel-indicators">
                    <li class="active" data-target="#product_details_slider" data-slide-to="0" style="background-image: url(img/product-img/product-9.jpg);">
                    </li>
                    <li data-target="#product_details_slider" data-slide-to="1" style="background-image: url(img/product-img/product-2.jpg);">
                    </li>
                    <li data-target="#product_details_slider" data-slide-to="2" style="background-image: url(img/product-img/product-3.jpg);">
                    </li>
                    <li data-target="#product_details_slider" data-slide-to="3" style="background-image: url(img/product-img/product-4.jpg);">
                    </li>
                </ol>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <a class="gallery_img" href="img/product-img/product-9.jpg">
                        <img class="d-block w-100" src="img/product-img/product-9.jpg" alt="First slide"/>
                    </a>
                    </div>
                    <div class="carousel-item">
                        <a class="gallery_img" href="img/product-img/product-2.jpg">
                        <img class="d-block w-100" src="img/product-img/product-2.jpg" alt="Second slide"/>
                    </a>
                    </div>
                    <div class="carousel-item">
                        <a class="gallery_img" href="img/product-img/product-3.jpg">
                        <img class="d-block w-100" src="img/product-img/product-3.jpg" alt="Third slide"/>
                    </a>
                    </div>
                    <div class="carousel-item">
                        <a class="gallery_img" href="img/product-img/product-4.jpg">
                        <img class="d-block w-100" src="img/product-img/product-4.jpg" alt="Fourth slide"/>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default ProductImages;