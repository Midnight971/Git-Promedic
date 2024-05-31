/**
 * Changer l'orientation du listing des produits
 */

const listingProduct = document.querySelector('.listing-products-produits');


function listing768 () {
    // On récupère la height de la div listingProduct
    const heightListingProduct = listingProduct.offsetHeight;
    console.log(heightListingProduct);
    listingProduct.style.height = (heightListingProduct + 100) + 'px';
    listingProduct.style.flexFlow = 'column wrap';
    listingProduct.style.justifyContent = 'flex-start'
}


function reinitialize () {
    listingProduct.style.height = 'auto';
    listingProduct.style.flexFlow = 'row wrap';
    listingProduct.style.justifyContent = 'space-between';
}

function readaptForSmallScreen () {
    listingProduct.style.height = 'auto';
    listingProduct.style.flexFlow = 'column wrap';
    listingProduct.style.justifyContent = 'space-between';
}


function initProduct () {
    window.addEventListener('load', () => {
        const heightViewport = window.innerWidth;
        if (heightViewport >= 768) {
            listing768();
        }
    })

    window.addEventListener('resize', () => {
        const heightViewport = window.innerWidth;
        if (heightViewport >= 768) {
            reinitialize();
            listing768();
        } else {
            readaptForSmallScreen();
        }
    })
}

initProduct();

