
import Modal from 'react-modal';


  {/* isOpen mean:if there is a product it will return true else false */}
    {/* onRequestClose : for click (esc)to close any window */}


 const ProductModal = (props) => {
const {product,closeModal}= props;

  return (

<Modal isOpen={product}  onRequestClose={closeModal}>
    <span onClick={closeModal} className='close-icon'>&times;</span>
    <div className='product-info'>
       <img src={product.imageUrl} alt={product.title}></img>
       <p>{product.title}</p>
       <p>{product.desc}</p>
       <p>${product.price}</p>
    </div>
</Modal>
  );
};

export default ProductModal

  