(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }

    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'igor-miranda.myshopify.com',
            apiKey: '41bc10863b44a8e7dd946ca271835948',
            appId: '6',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: [8235973251],
                node: document.getElementById('product-component-a77fd9ce4f4'),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                    "product": {
                        "variantId": "all",
                        "width": "240px",
                        "contents": {
                            "img": false,
                            "imgWithCarousel": false,
                            "title": false,
                            "variantTitle": false,
                            "price": false,
                            "description": false,
                            "buttonWithQuantity": false,
                            "quantity": false
                        },
                        "text": {
                            "button": "BUY NOW"
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0",
                                    "margin-bottom": "50px"
                                }
                            },
                            "button": {
                                "background-color": "#ff8900",
                                "padding-left": "20px",
                                "padding-right": "20px",
                                ":hover": {
                                    "background-color": "#e67b00"
                                },
                                "border-radius": "5px",
                                ":focus": {
                                    "background-color": "#e67b00"
                                }
                            },
                            "title": {
                                "font-size": "26px"
                            },
                            "price": {
                                "font-size": "18px"
                            },
                            "compareAt": {
                                "font-size": "15px"
                            }
                        }
                    },
                    "cart": {
                        "contents": {
                            "button": true
                        },
                        "styles": {
                            "button": {
                                "background-color": "#ff8900",
                                ":hover": {
                                    "background-color": "#e67b00"
                                },
                                "border-radius": "5px",
                                ":focus": {
                                    "background-color": "#e67b00"
                                }
                            },
                            "footer": {
                                "background-color": "#ffffff"
                            }
                        }
                    },
                    "modalProduct": {
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true,
                            "variantTitle": false,
                            "buttonWithQuantity": true,
                            "button": false,
                            "quantity": false
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            "button": {
                                "background-color": "#ff8900",
                                "padding-left": "20px",
                                "padding-right": "20px",
                                ":hover": {
                                    "background-color": "#e67b00"
                                },
                                "border-radius": "5px",
                                ":focus": {
                                    "background-color": "#e67b00"
                                }
                            }
                        }
                    },
                    "toggle": {
                        "styles": {
                            "toggle": {
                                "background-color": "#ff8900",
                                ":hover": {
                                    "background-color": "#e67b00"
                                },
                                ":focus": {
                                    "background-color": "#e67b00"
                                }
                            },
                            "count": {
                                "font-size": "16px"
                            }
                        }
                    },
                    "productSet": {
                        "styles": {
                            "products": {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    }
                }
            });
        });
    }
})();