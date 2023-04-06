const products = [
    {
      name: 'Protien Powder',
      description: 'Optimum Nutrition Serious Mass Weight Gainer Protein Powder, Vitamin C, Zinc and Vitamin D for Immune Support, Chocolate, 6 Pound.',
      price: 54.99,
      image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71qpIQW5NlL._AC_SL1500_.jpg',
      url: 'https://www.amazon.com/OPTIMUM-NUTRITION-Serious-Protein-Chocolate/dp/B0015R36SK/ref=sr_1_2_sspa?crid=1OLO1P8KJ1QO9&amp;keywords=protein+powder+chocolate&amp;qid=1680478660&amp;sprefix=protien+poweder+%252Caps%252C83&amp;sr=8-2-spons&amp;psc=1&amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFDVFNFMFI4UUs0VjgmZW5jcnlwdGVkSWQ9QTA5OTAxNDlCN1g5UjVDM0hTMkUmZW5jcnlwdGVkQWRJZD1BMDQzNjE2ODFYS0FRMFE3MEtLS1gmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&_encoding=UTF8&tag=omnihive-20&linkCode=ur2&linkId=a9362b657d821c17923609455eaac940&camp=1789&creative=9325'
      
    },
    {
      name: 'Optimum Nutrition',
      description: 'Optimum Nutrition Gold Standard 100% Whey Protein Powder, Double Rich Chocolate 2 Pound ',
      price: 44.89,
      image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/515u6XKIwSL._AC_SL1001_.jpg',
      url:  'https://www.amazon.com/OPTIMUM-NUTRITION-STANDARD-Protein-Chocolate/dp/B002DYIZH6/ref=sr_1_5?crid=3QCYDQDFX4D7Z&amp;keywords=protein%252Bpowder&amp;qid=1680734303&amp;sprefix=protien%252Bpowder%252Caps%252C165&amp;sr=8-5&amp;th=1&_encoding=UTF8&tag=omnihive-20&linkCode=ur2&linkId=f000324948e78e9a0f08db6a3a5aae11&camp=1789&creative=9325'
    },
    {
      name: 'Whey Protien',
      description: 'Body Fortress Super Advanced Whey Protein Powder, Chocolate, Immune Support (1), Vitamins C & D Plus Zinc, 1.78 lbs',
      price: 39.99,
      image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61JjBjBOQ0L._AC_SL1030_.jpg',
      url: 'https://www.amazon.com/Body-Fortress-Advanced-Chocolate-Vitamins/dp/B0BJLBD427/ref=sr_1_6?crid=3QCYDQDFX4D7Z&amp;keywords=protein%252Bpowder&amp;qid=1680734950&amp;rdc=1&amp;sprefix=protien%252Bpowder%252Caps%252C165&amp;sr=8-6&amp;th=1&_encoding=UTF8&tag=omnihive-20&linkCode=ur2&linkId=c596a11dda903d0af9166e636d96924b&camp=1789&creative=9325'
    },
    {
      name: 'Orgain Organic Vegan Protein Powder',
      description: 'Creamy Chocolate Fudge - 21g of Plant Based Protein, Low Net Carbs, Non Dairy, Gluten Free, No Sugar Added, Soy Free, Kosher, Non-GMO, 2.03 Lb ',
      price: 29.99,
      image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81wI8uQBJSL._SL1500_.jpg',
      url: 'https://www.amazon.com/Orgain-Organic-Protein-Powder-Chocolate/dp/B00J074W94/ref=sr_1_1_sspa?crid=3QCYDQDFX4D7Z&amp;keywords=protein+powder&amp;qid=1680734950&amp;sprefix=protien+powder%252Caps%252C165&amp;sr=8-1-spons&amp;psc=1&amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyREhRVjY4OFMxM0RLJmVuY3J5cHRlZElkPUEwNDA2ODY2MjdLNDI2TDZEN0NERCZlbmNyeXB0ZWRBZElkPUEwMjUwMzgyM01YWklTUDRGVjVMMSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=&_encoding=UTF8&tag=omnihive-20&linkCode=ur2&linkId=4b6fe10d987c2bfeac15de1143884512&camp=1789&creative=9325'
    
    },
    {
      name: 'Orgain Organic Vegan Protein Powder',
      description: 'Creamy Chocolate Fudge - 21g of Plant Based Protein, Low Net Carbs, Non Dairy, Gluten Free, No Sugar Added, Soy Free, Kosher, Non-GMO, 2.03 Lb ',
      price: 29.99,
      image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81wI8uQBJSL._SL1500_.jpg',
      url: 'https://www.amazon.com/Orgain-Organic-Protein-Powder-Chocolate/dp/B00J074W94/ref=sr_1_1_sspa?crid=3QCYDQDFX4D7Z&amp;keywords=protein+powder&amp;qid=1680734950&amp;sprefix=protien+powder%252Caps%252C165&amp;sr=8-1-spons&amp;psc=1&amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyREhRVjY4OFMxM0RLJmVuY3J5cHRlZElkPUEwNDA2ODY2MjdLNDI2TDZEN0NERCZlbmNyeXB0ZWRBZElkPUEwMjUwMzgyM01YWklTUDRGVjVMMSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=&_encoding=UTF8&tag=omnihive-20&linkCode=ur2&linkId=4b6fe10d987c2bfeac15de1143884512&camp=1789&creative=9325'
    },
    {
      name: 'Product 2',
      description: 'This is the description for Product 2.',
      price: 29.99,
      image: 'product2.jpg',
      url: 'https://www.amazon.com/OPTIMUM-NUTRITION-Serious-Protein-Chocolate/dp/B0015R36SK/ref=sr_1_2_sspa?crid=1OLO1P8KJ1QO9&amp;keywords=protein+powder+chocolate&amp;qid=1680478660&amp;sprefix=protien+poweder+%252Caps%252C83&amp;sr=8-2-spons&amp;psc=1&amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFDVFNFMFI4UUs0VjgmZW5jcnlwdGVkSWQ9QTA5OTAxNDlCN1g5UjVDM0hTMkUmZW5jcnlwdGVkQWRJZD1BMDQzNjE2ODFYS0FRMFE3MEtLS1gmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&_encoding=UTF8&tag=omnihive-20&linkCode=ur2&linkId=a9362b657d821c17923609455eaac940&camp=1789&creative=9325'
      
    },
    {
      name: 'Product 2',
      description: 'This is the description for Product 2.',
      price: 29.99,
      image: 'product2.jpg',
      url: 'https://www.amazon.com/OPTIMUM-NUTRITION-Serious-Protein-Chocolate/dp/B0015R36SK/ref=sr_1_2_sspa?crid=1OLO1P8KJ1QO9&amp;keywords=protein+powder+chocolate&amp;qid=1680478660&amp;sprefix=protien+poweder+%252Caps%252C83&amp;sr=8-2-spons&amp;psc=1&amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFDVFNFMFI4UUs0VjgmZW5jcnlwdGVkSWQ9QTA5OTAxNDlCN1g5UjVDM0hTMkUmZW5jcnlwdGVkQWRJZD1BMDQzNjE2ODFYS0FRMFE3MEtLS1gmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&_encoding=UTF8&tag=omnihive-20&linkCode=ur2&linkId=a9362b657d821c17923609455eaac940&camp=1789&creative=9325'
      
    },
    {
      name: 'Product 2',
      description: 'This is the description for Product 2.',
      price: 29.99,
      image: 'product2.jpg',
      url: 'https://www.amazon.com/OPTIMUM-NUTRITION-Serious-Protein-Chocolate/dp/B0015R36SK/ref=sr_1_2_sspa?crid=1OLO1P8KJ1QO9&amp;keywords=protein+powder+chocolate&amp;qid=1680478660&amp;sprefix=protien+poweder+%252Caps%252C83&amp;sr=8-2-spons&amp;psc=1&amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFDVFNFMFI4UUs0VjgmZW5jcnlwdGVkSWQ9QTA5OTAxNDlCN1g5UjVDM0hTMkUmZW5jcnlwdGVkQWRJZD1BMDQzNjE2ODFYS0FRMFE3MEtLS1gmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&_encoding=UTF8&tag=omnihive-20&linkCode=ur2&linkId=a9362b657d821c17923609455eaac940&camp=1789&creative=9325'
      
    },
    {
      name: 'Product 2',
      description: 'This is the description for Product 2.',
      price: 29.99,
      image: 'product2.jpg',
      url: 'https://www.amazon.com/OPTIMUM-NUTRITION-Serious-Protein-Chocolate/dp/B0015R36SK/ref=sr_1_2_sspa?crid=1OLO1P8KJ1QO9&amp;keywords=protein+powder+chocolate&amp;qid=1680478660&amp;sprefix=protien+poweder+%252Caps%252C83&amp;sr=8-2-spons&amp;psc=1&amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFDVFNFMFI4UUs0VjgmZW5jcnlwdGVkSWQ9QTA5OTAxNDlCN1g5UjVDM0hTMkUmZW5jcnlwdGVkQWRJZD1BMDQzNjE2ODFYS0FRMFE3MEtLS1gmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&_encoding=UTF8&tag=omnihive-20&linkCode=ur2&linkId=a9362b657d821c17923609455eaac940&camp=1789&creative=9325'
      
    },
  ];
   
  // Function to generate product list items
  function generateProductListItem(product) {
    const listItem = document.createElement('li');
    const image = document.createElement('img');
    const name = document.createElement('h3');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const buyButton = document.createElement('button');
    buyButton.setAttribute("data-url", product.url);
  
    image.src = product.image;
    image.alt = product.name;
    name.textContent = product.name;
    description.textContent = product.description;
    price.textContent = `$${product.price.toFixed(2)}`;
    buyButton.textContent = 'Buy Now';
  
    listItem.appendChild(image);
    listItem.appendChild(name);
    listItem.appendChild(description);
    listItem.appendChild(price);
    listItem.appendChild(buyButton);
  
    return listItem;
  }
  
  // Function to generate product list
  function generateProductList() {
    const productList = document.getElementById('product-list');
  
    products.forEach(product => {
      const listItem = generateProductListItem(product);
      productList.appendChild(listItem);
    });
  }
  
  // Call the function to generate product list
  generateProductList(); 
  
  // Add event listener to the "Buy Now" buttons
  const buyButtons = document.querySelectorAll('button');
  
  buyButtons.forEach((button, index) => {
    button.addEventListener('click', function(event){
      console.log("clickskshd");
      let page = event.target.dataset.url;
      window.open(page, "_blank");
      
    });
  });
  