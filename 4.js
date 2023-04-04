const products = [
    {
      name: 'Protien Powder',
      description: 'Optimum Nutrition Serious Mass Weight Gainer Protein Powder, Vitamin C, Zinc and Vitamin D for Immune Support, Chocolate, 6 Pound.',
      price: 54.99,
      image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71qpIQW5NlL._AC_SL1500_.jpg',
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
      name: 'Product 3',
      description: 'This is the description for Product 3.',
      price: 39.99,
      image: 'product3.jpg',
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
  