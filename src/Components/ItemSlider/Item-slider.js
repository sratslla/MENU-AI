import React,{useState} from 'react';
import "./item-slider.css"
// import styled from 'styled-components';

const ImageSlider = () => {
    const [pic, setpic] = useState(0)
    const [rightpic, setrightpic] = useState(-6200)

    const upClick = () => {
        console.log("up")
        // console.log(slidesLength)
        // console.log(activeSlideIndex)
        if (rightpic === 0){
            setpic(0)
            setrightpic(-6200)
        }
        // console.log(page)
        else{
            var page = pic - 100
            console.log(page)
            // console.log(rightpage)
            var rightpage = rightpic + 100
            console.log(rightpage)
            console.log(pic)
            setpic(page)
            console.log(pic)
            console.log(rightpic)
            setrightpic(rightpage)
        }
        
    }
    console.log(rightpic)
    console.log(pic)

    const downClick = () => {
        console.log("down")
        if (pic === 0){
            setpic(-6200)
            setrightpic(0) 
        }
        else{
            var dpage = pic
            dpage = dpage + 100
            var drightpage = rightpic
            drightpage = drightpage - 100
            setpic(dpage)
            setrightpic(drightpage)
        }
    }
    return(
        <div>
            <div className = 'container'>
                <div style = {{top: (pic.toString() + "vh")}} className='left-container'>
                    <div style={{backgroundImage: "url('https://www.kitchensanctuary.com/wp-content/uploads/2016/10/Broccoli-cheese-soup-with-bacon-fat-croutons-square-FS.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://www.tarladalal.com/members/9306/procstepimgs/lemon-and-coriander-soup--19-185655.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://www.asweetpeachef.com/wp-content/uploads/2015/01/easy-soup-recipes-cream-of-fresh-tomato-soup.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://media-cdn.tripadvisor.com/media/photo-s/1a/fb/a7/a4/hara-bhara-kabab.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2020/Dahi_Ke_Kebab_Recipe_Greek_Yogurt_Kebabs_Mughlai_Cuisine__1.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://www.shutterbean.com/wp-content/uploads/2015/06/4179888191_bb0bbd5f54.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://st2.depositphotos.com/1373322/6587/i/950/depositphotos_65874811-stock-photo-fried-spring-rolls-on-a.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://media.istockphoto.com/photos/vegetarian-schezwan-noodles-or-vegetable-hakka-noodles-or-chow-mein-picture-id1176490259?k=20&m=1176490259&s=612x612&w=0&h=eY6EdgUnnwPHjyGR0MMak8ytPEmhq2lrzhXJRwadMWA=')"}}></div>    
                    <div style={{backgroundImage: "url('https://envato-shoebox-0.imgix.net/f732/f6c4-7cb7-4015-88e0-eb1a4e5bec94/DSC_6102.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=9bcdc9d691edd92ece37669b2b78acb9')"}}></div>    
                    <div style={{backgroundImage: "url('https://static.toiimg.com/photo/84847433/84847433.jpg?v=3')"}}></div>    
                    <div style={{backgroundImage: "url('https://www.carveyourcraving.com/wp-content/uploads/2020/04/Vegetable-uttapam-recipe.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://www.foodguruz.in/wp-content/uploads/2019/01/mysore-masala-dosa-recipe-foodguruz-1.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://s3.envato.com/files/290930284/DSC_5704.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://t4.ftcdn.net/jpg/02/30/05/67/360_F_230056730_aloAPyyK9REoiRSzIHa2Dumq6FqAOmqo.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://s3.envato.com/files/238833902/4Q4A8025.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://media-cdn.tripadvisor.com/media/photo-s/0e/b3/63/d4/pizza.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://static.punjabkesari.in/multimedia/2019_6image_14_21_266147518farmhouse-pizza-ll.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://pbs.twimg.com/media/EBcBCN1VUAAmlVY.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://www.ruchiskitchen.com/wp-content/uploads/2020/09/Paneer-tikka-pizza-recipe-1.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://st2.depositphotos.com/3300441/8335/i/950/depositphotos_83350342-stock-photo-top-view-of-a-traditional.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://media.istockphoto.com/photos/homemade-meat-lasagna-with-fresh-basil-and-parmesan-cheese-in-a-plate-picture-id1210420575?k=20&m=1210420575&s=612x612&w=0&h=zBIHJl5eQr4r9j7xaLke1oriL9JCXiInDcryvyU0PzY=')"}}></div>    
                    <div style={{backgroundImage: "url('https://media.istockphoto.com/photos/malai-kofta-curry-in-black-bowl-at-dark-slate-background-malai-kofta-picture-id1219174099?k=20&m=1219174099&s=612x612&w=0&h=bdVdhf_OtWppko-f0nDvBxUTd6x3SU-W-x51Wr5Lvww=')"}}></div>    
                    <div style={{backgroundImage: "url('https://image.shutterstock.com/image-photo/kashmiri-dum-aloo-spicy-potato-260nw-532282477.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://i.pinimg.com/originals/8c/fc/e3/8cfce3fca09f31a0dba67845692e65c9.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://holycowvegan.net/wp-content/uploads/2008/09/navratan-korma-kurma-7.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://static.toiimg.com/photo/53097626.cms')"}}></div>    
                    <div style={{backgroundImage: "url('https://i.ytimg.com/vi/9mWYQKO6jvE/maxresdefault.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://www.whiskaffair.com/wp-content/uploads/2019/04/Dal-Tadka-2-3.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://envato-shoebox-0.imgix.net/de9e/995d-06b2-459c-a3a8-941ad3154847/DSC_3371.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=45012f71134aa31636bb5582d160c72a')"}}></div>    
                    <div style={{backgroundImage: "url('https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/paneer-butter-masala-recipe.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://www.carveyourcraving.com/wp-content/uploads/2019/04/Restaurant-style-paneer-lababdar_.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://img-global.cpcdn.com/recipes/e5c6dc0b8beee8d2/680x482cq70/tawa-paneer-recipe-main-photo.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://i0.wp.com/www.dinedelicious.in/wp-content/uploads/2021/10/Kadai-Paneer-Recipe-4.jpg?fit=1000%2C750&ssl=1')"}}></div>    
                    <div style={{backgroundImage: "url('https://www.vidhyashomecooking.com/wp-content/uploads/2021/02/PaneerBhurji-683x1024.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://hetalkamdar.com/wp-content/uploads/2020/08/Aloo-Paneer-3.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://www.stockimagefactory.com/StockImageFactory.com-photo-ID(0000146320)naan-tandoori-butter-roti-chapati-indian-flat-bread.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://media.istockphoto.com/photos/indian-naan-bread-with-garlic-butter-on-wooden-table-picture-id1143530040')"}}></div>    
                    <div style={{backgroundImage: "url('https://hostthetoast.com/wp-content/uploads/2018/08/Homemade-Garlic-Naan-2.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://foodiegarima.com/wp-content/uploads/2021/05/Naan-1.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://img-global.cpcdn.com/recipes/a2d6c0c3ae6f1a64/1200x630cq70/photo.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://www.cookingcarnival.com/wp-content/uploads/2016/02/Amritsari-Kulcha.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://www.whiskaffair.com/wp-content/uploads/2014/09/Missi-Roti-4-500x500.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://drivito1.imgix.drizly.com/e60889009b6e3281/030f6837a1ee/Fizz_Hero.gif?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpeg&q=25')"}}></div>    
                    <div style={{backgroundImage: "url('https://savortheflavour.com/wp-content/uploads/2018/07/Cinderella-Drink-Tasty-2.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://www.jamieoliver.com/drinks-tube/app/uploads/2014/06/Mojito.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://bellyfull.net/wp-content/uploads/2020/12/Shirley-Temple-Drink-blog-3.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://www.acouplecooks.com/wp-content/uploads/2020/11/Pina-Colada-056.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2012%2F09%2FFrench75_0_0.png')"}}></div>    
                    <div style={{backgroundImage: "url('https://www.theworktop.com/wp-content/uploads/2015/01/Easy-Mocktail-Recipe-Orange-Juice.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://karltayloreducation.com/wp-content/uploads/2018/05/Dalmore_whisky_karl_taylor.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://i.pinimg.com/736x/28/63/09/286309049d60316a1cc47a4ab5c7a4f7--bourbon-cocktails-rye.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://thumbs.dreamstime.com/b/baku-azerbaijan-feb-absolut-vodka-brand-produced-near-ahus-sweden-owned-french-group-pernod-ricard-bottle-wooden-172161927.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://i.pinimg.com/originals/dc/59/df/dc59dfaa7bcfc49ef6022ce8b73781ce.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://media.istockphoto.com/photos/whiskey-on-table-picture-id534682963?k=20&m=534682963&s=612x612&w=0&h=qflREACm0dc_k5R5Xo-OdL7vhOUCv5IGnNhe_JclOhU=')"}}></div>    
                    <div style={{backgroundImage: "url('https://media.istockphoto.com/photos/bottle-on-shore-picture-id1207907785?k=20&m=1207907785&s=612x612&w=0&h=KBtdMamI2-S79zhRWWqsNPZersEuOuOEbwouylaUVe4=')"}}></div>    
                    <div style={{backgroundImage: "url('https://cloudfront.omsphoto.com/wp-content/uploads/2019/11/OMS-photo-drink-photography-tequila-047.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://i.pinimg.com/474x/9c/c1/b7/9cc1b7cc0be0804dda0d93f7e35871a9.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://media.istockphoto.com/photos/banana-pancakes-with-chocolate-sauce-picture-id1135386720?k=20&m=1135386720&s=612x612&w=0&h=BEdSHcxSusZgwuwVgiYcC4SOh7PW_kva4jvjXiN8HFU=')"}}></div>    
                    <div style={{backgroundImage: "url('https://image.shutterstock.com/image-photo/chocolate-pancake-glazeraspberries-mintselective-focus-260nw-394772050.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://i.pinimg.com/originals/8c/e1/bc/8ce1bc9ef5ee5cad4bf85c406508728f.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://image.shutterstock.com/image-photo/delicious-waffles-made-chocolate-nuts-260nw-1481546642.jpg')"}}></div>    
                    <div style={{backgroundImage: "url('https://media.istockphoto.com/photos/kulfi-picture-id503011705?k=20&m=503011705&s=612x612&w=0&h=qqpQ-7YQ1qiC0lBRQqr8ULfNAq0xatM1em_NgKFi7Jo=')"}}></div>    
                    <div style={{backgroundImage: "url('https://madaboutkitchen.in/wp-content/uploads/2015/11/Gulab-Jamun-3-.jpg')"}}></div>    
                </div>
                <div style = {{top: (rightpic.toString() + "vh")}} className='right-container'>
                    <div>
                        <h1>Gulab Jamun</h1>
                        <p>Gulab jamun is a milk-solid-based sweet, originating in Indian subcontinent</p>
                    </div>
                    <div>
                        <h1>Kulfi Falooda</h1>
                        <p>A falooda is an Indian version of a cold dessert made with noodles.</p>
                    </div>
                    <div>
                        <h1>Chocolate Waffle</h1>
                        <p>A waffle is a dish made from leavened batter or dough that is cooked between two plates that are patterned to give a characteristic size, shape, and surface impression.</p>
                    </div>
                    <div>
                        <h1>Oreo Waffle</h1>
                        <p>A waffle is a dish made from leavened batter or dough that is cooked between two plates that are patterned to give a characteristic size, shape, and surface impression.</p>
                    </div>
                    <div>
                        <h1>Chocolate Pancake</h1>
                        <p>A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter</p>
                    </div>
                    <div>
                        <h1>Nutella Pancake</h1>
                        <p>A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter</p>
                    </div>
                    <div>
                        <h1>Classic Pancake</h1>
                        <p>A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter</p>
                    </div>
                    <div>
                        <h1>Tequila</h1>
                        <p>Tequila is a distilled beverage made from the blue agave plant, primarily in the area surrounding the city of Tequila 65 km northwest of Guadalajara</p>
                    </div>
                    <div>
                        <h1>Rum</h1>
                        <p>Rum is a liquor made by fermenting then distilling sugarcane molasses or sugarcane juice.</p>
                    </div>
                    <div>
                        <h1>Brandy</h1>
                        <p>Brandy is a liquor produced by distilling wine. Brandy generally contains 35 to 60% alcohol by volume and is typically consumed as an after-dinner digestif.</p>
                    </div>
                    <div>
                        <h1>Beer</h1>
                        <p>Beer is one of the oldest and most widely consumed alcoholic drinks in the world,</p>
                    </div>
                    <div>
                        <h1>Vodka</h1>
                        <p>Vodka is a clear distilled alcoholic beverage.Vodka is composed mainly of water and ethanol but sometimes with traces of impurities and flavourings.</p>
                    </div>
                    <div>
                        <h1>Bourbon</h1>
                        <p>Bourbon is a type of American whiskey, a barrel-aged distilled liquor made primarily from corn.</p>
                    </div>
                    <div>
                        <h1>Scotch</h1>
                        <p>Scotch whisky is malt whisky or grain whisky, made in Scotland. All Scotch whisky was originally made from malted barley. </p>
                    </div>
                    <div>
                        <h1>Sunburst</h1>
                        <p>Type of Mocktail</p>
                    </div>
                    <div>
                        <h1>French 75</h1>
                        <p>French 75 is a cocktail made from gin, champagne, lemon juice, and sugar. It is also called a 75 Cocktail, or in French simply a Soixante Quinze.</p>
                    </div>
                    <div>
                        <h1>Pina Colada</h1>
                        <p>The piña colada is a cocktail made with rum, cream of coconut or coconut milk, and pineapple juice, usually served either blended or shaken with ice.</p>
                    </div>
                    <div>
                        <h1>Shirley Temple</h1>
                        <p>A Shirley Temple is a non-alcoholic mixed drink traditionally made with ginger ale and a splash of grenadine, garnished with a maraschino cherry.</p>
                    </div>
                    <div>
                        <h1>Mojito</h1>
                        <p>Mojito is a traditional Cuban highball. The cocktail often consists of five ingredients: white rum, sugar, lime juice, soda water, and mint.</p>
                    </div>
                    <div>
                        <h1>Cinderella</h1>
                        <p>Mix orange juice, pineapple juice, lemon juice, sugar syrup and grenadine syrup along with the ice in cocktail shaker and shake well.</p>
                    </div>
                    <div>
                        <h1>Apple Fizz</h1>
                        <p>Appy Fizz consists of carbonated apple juice, and can be used as the basis for cocktails.</p>
                    </div>
                    <div>
                        <h1>Missi Roti</h1>
                        <p>Missi Roti are savory and nutty flavored flatbreads made with a mix of whole wheat flour, gram flour and spices.</p>
                    </div>
                    <div>
                        <h1>Stuffed Kulcha</h1>
                        <p>They are made using maida or a refined white flour</p>
                    </div>
                    <div>
                        <h1>Rumali Roti</h1>
                        <p>Rumali roti also called Manda is a thin flatbread originating from the Indian subcontinent,</p>
                    </div>
                    <div>
                        <h1>Stuffed Naan</h1>
                        <p>The Naan dough is composed of flour, water, yogurt, and yeast, then traditionally cooked in the tandoor oven.</p>
                    </div>
                    <div>
                        <h1>Garlic Naan</h1>
                        <p>The Naan dough is composed of flour, water, yogurt, and yeast, then traditionally cooked in the tandoor oven.</p>
                    </div>
                    <div>
                        <h1>Butter Naan</h1>
                        <p>The Naan dough is composed of flour, water, yogurt, and yeast, then traditionally cooked in the tandoor oven.</p>
                    </div>
                    <div>
                        <h1>Butter Roti</h1>
                        <p>The Naan dough is composed of flour, water, yogurt, and yeast, then traditionally cooked in the tandoor oven.</p>
                    </div>
                    <div>
                        <h1>Aloo Paneer Masala</h1>
                        <p>Indian cottage cheese, is a fresh acid-set cheese common in the Indian subcontinent made from cow or buffalo milk.</p>
                    </div>
                    <div>
                        <h1>Paneer Bhurji</h1>
                        <p>Indian cottage cheese, is a fresh acid-set cheese common in the Indian subcontinent made from cow or buffalo milk.</p>
                    </div>
                    <div>
                        <h1>Kadhai Paneer</h1>
                        <p>Indian cottage cheese, is a fresh acid-set cheese common in the Indian subcontinent made from cow or buffalo milk.</p>
                    </div>
                    <div>
                        <h1>Tawa Paneer</h1>
                        <p>Indian cottage cheese, is a fresh acid-set cheese common in the Indian subcontinent made from cow or buffalo milk.</p>
                    </div>
                    <div>
                        <h1>Paneer Lababdar</h1>
                        <p>Indian cottage cheese, is a fresh acid-set cheese common in the Indian subcontinent made from cow or buffalo milk.</p>
                    </div>
                    <div>
                        <h1>Paneer Tikka Masala</h1>
                        <p>Indian cottage cheese, is a fresh acid-set cheese common in the Indian subcontinent made from cow or buffalo milk.</p>
                    </div>
                    <div>
                        <h1>Paneer Butter Masala</h1>
                        <p>Indian cottage cheese, is a fresh acid-set cheese common in the Indian subcontinent made from cow or buffalo milk.</p>
                    </div>
                    <div>
                        <h1>Dal Tadka</h1>
                        <p>n Indian cuisine, dal (also spelled daal; pronunciation are dried, split pulses that do not require soaking before cooking.</p>
                    </div>
                    <div>
                        <h1>Dal Bukhara</h1>
                        <p>n Indian cuisine, dal (also spelled daal; pronunciation are dried, split pulses that do not require soaking before cooking.</p>
                    </div>
                    <div>
                        <h1>Dal Makhani</h1>
                        <p>Indian cuisine, dal (also spelled daal; pronunciation are dried, split pulses that do not require soaking before cooking.</p>
                    </div>
                    <div>
                        <h1>Navratan Korma</h1>
                        <p>While many ancient Indian recipes have been lost in history, one can look at ancient texts to see what was eaten in ancient and pre-historic India.</p>
                    </div>
                    <div>
                        <h1>Chana Masala</h1>
                        <p>While many ancient Indian recipes have been lost in history, one can look at ancient texts to see what was eaten in ancient and pre-historic India.</p>
                    </div>
                    <div>
                        <h1>Dum Aloo</h1>
                        <p>While many ancient Indian recipes have been lost in history, one can look at ancient texts to see what was eaten in ancient and pre-historic India.</p>
                    </div>
                    <div>
                        <h1>Malai Kofta</h1>
                        <p>While many ancient Indian recipes have been lost in history, one can look at ancient texts to see what was eaten in ancient and pre-historic India.</p>
                    </div>
                    <div>
                        <h1>Vegetable Lasagne</h1>
                        <p>Consisting of the ingredients, recipes and cooking techniques developed across the Italian Peninsula since antiquity</p>
                    </div>
                    <div>
                        <h1>Lasagne</h1>
                        <p>Consisting of the ingredients, recipes and cooking techniques developed across the Italian Peninsula since antiquity</p>
                    </div>
                    <div>
                        <h1>Tandoori Paneer Pizza</h1>
                        <p>Consisting of the ingredients, recipes and cooking techniques developed across the Italian Peninsula since antiquity</p>
                    </div>
                    <div>
                        <h1>Paneer Peppy Pizza</h1>
                        <p>Consisting of the ingredients, recipes and cooking techniques developed across the Italian Peninsula since antiquity</p>
                    </div>
                    <div>
                        <h1>Farm House Pizza</h1>
                        <p>Consisting of the ingredients, recipes and cooking techniques developed across the Italian Peninsula since antiquity</p>
                    </div>
                    <div>
                        <h1>Pizza Exotica</h1>
                        <p>Consisting of the ingredients, recipes and cooking techniques developed across the Italian Peninsula since antiquity</p>
                    </div>
                    <div>
                        <h1>Margherita Pizza</h1>
                        <p>Consisting of the ingredients, recipes and cooking techniques developed across the Italian Peninsula since antiquity</p>
                    </div>
                    <div>
                        <h1>Rava Plain Dosa</h1>
                        <p>A dosa is a thin pancake or crepe originating from South India, made from a fermented batter predominantly consisting of lentils and rice.</p>
                    </div>
                    <div>
                        <h1>Rava Masala Dosa</h1>
                        <p>A dosa is a thin pancake or crepe originating from South India, made from a fermented batter predominantly consisting of lentils and rice.</p>
                    </div>
                    <div>
                        <h1>Mysore Masala Dosa</h1>
                        <p>A dosa is a thin pancake or crepe originating from South India, made from a fermented batter predominantly consisting of lentils and rice.</p>
                    </div>
                    <div>
                        <h1>Mix Veg Uttapam</h1>
                        <p>A dosa is a thin pancake or crepe originating from South India, made from a fermented batter predominantly consisting of lentils and rice.</p>
                    </div>
                    <div>
                        <h1>Honey Chilly Potato</h1>
                        <p>The preferences for seasoning and cooking techniques of Chinese provinces depend on differences in historical background and ethnic groups.</p>
                    </div>
                    <div>
                        <h1>Chinese Bhel</h1>
                        <p>The preferences for seasoning and cooking techniques of Chinese provinces depend on differences in historical background and ethnic groups.</p>
                    </div>
                    <div>
                        <h1>Chowmein</h1>
                        <p>The preferences for seasoning and cooking techniques of Chinese provinces depend on differences in historical background and ethnic groups.</p>
                    </div>
                    <div>
                        <h1>Spring Rolls</h1>
                        <p>A starter is a small quantity of food that is served as the first course of a meal. ... The starters in a race are the people or animals who take part at the beginning even if they do not finish.</p>
                    </div>
                    <div>
                        <h1>Italian Mix Fries</h1>
                        <p>A starter is a small quantity of food that is served as the first course of a meal. ... The starters in a race are the people or animals who take part at the beginning even if they do not finish.</p>
                    </div>
                    <div>
                        <h1>Dahi Ke Kebab</h1>
                        <p>A starter is a small quantity of food that is served as the first course of a meal. ... The starters in a race are the people or animals who take part at the beginning even if they do not finish.</p>
                    </div>
                    <div>
                        <h1>Hara Bhara Kabab</h1>
                        <p>A starter is a small quantity of food that is served as the first course of a meal. ... The starters in a race are the people or animals who take part at the beginning even if they do not finish.</p>
                    </div>
                    <div>
                        <h1>Cream Of Tomato</h1>
                        <p>Soup is a primarily liquid food, generally served warm or hot, that is made by combining ingredients of meat or vegetables with stock, milk, or water.</p>
                    </div>
                    <div>
                        <h1>Lemon Coriander Soup</h1>
                        <p>Soup is a primarily liquid food, generally served warm or hot, that is made by combining ingredients of meat or vegetables with stock, milk, or water.</p>
                    </div>
                    <div>
                        <h1>Broccoli Soup</h1>
                        <p>Soup is a primarily liquid food, generally served warm or hot, that is made by combining ingredients of meat or vegetables with stock, milk, or water.</p>
                    </div>
                    
                </div>
                <div class="button">
                    <button id='soup'>Soup--</button>
                    <button id='starters'>Starters--</button>
                    <button id='Chinese'>Chinese--</button>
                    <button id='south'>South Indian--</button>
                    <button id='italian'>Italian--</button>
                    <button id='Vegetables'>Vegetables--</button>
                    <button id='paneer'>Paneer Vegetable--</button>
                    <button id='Breads'>Breads--</button>
                    <button id='Mocktails'>Mocktails--</button>
                    <button id='alco'>Alcoholic Drink--</button>
                    <button id='Desserts'>Desserts--</button>
                    <button className = 'button-up' onClick={upClick}>up
                        <i class = "fas fa-arrow-up"></i>
                    </button>
                    <button className = 'button-down' onClick={downClick}>down
                        <i class = "fas fa-arrow-down"></i>
                    </button>
        </div>
            </div>
        </div>
    )
}
export default ImageSlider