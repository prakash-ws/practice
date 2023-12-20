import { FiPlus, FiMinus } from 'react-icons/fi'
import '../../../../assets/style/home/product.scss'
import { useEffect, useState } from 'react'
import DummyImage from '../../../../assets/images/No_image_available.svg.png'
import productArray from '../../../data'

const ProductUi = () => {
  const [count, setCount] = useState(1)
  const [selectedProducts, setSelectedProducts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  const handleProductSelection = product => {
    const isSelected = selectedProducts.some(
      selectedProduct => selectedProduct._id === product._id,
    )

    if (isSelected) {
      setSelectedProducts(prevSelectedProducts =>
        prevSelectedProducts.filter(
          selectedProduct => selectedProduct._id !== product._id,
          console.log('id'),
        ),
      )
    } else {
      setSelectedProducts(prevSelectedProducts => [
        ...prevSelectedProducts,
        product,
      ])
    }
  }

  useEffect(() => {
    const newTotalPrice = selectedProducts.reduce(
      (sum, product) => sum + product.price,
      0,
    )
    setTotalPrice(newTotalPrice)
  }, [selectedProducts])

  return (
    <>
      {productArray.map(category => (
        <>
          <div key={category} className="container">
            <div className="container_top">
              <div className="container_top_heading">
                <h4>
                  {category.type === 'radioButton' ? 'Pet Care' : 'Hair Cut'}
                </h4>
              </div>
              <div className="container_bottom_content">
                <div className="container_bottom_content_left">
                  <p>Men&apos;s Haircut</p>
                </div>
                <div className="container_bottom_content_right">
                  <span>$ 40 </span>

                  <input type="radio" />
                </div>
              </div>
              <hr />
            </div>
            <div className="container_bottom">
              <div className="container_top_heading">
                <h4>Select Style</h4>
              </div>
              {category.data.map(product => (
                <>
                  <div className="container_bottom_content">
                    <div className="container_bottom_content_left">
                      <img
                        className="w-[35px] h-[35px] mr-1.5"
                        src={DummyImage}
                        alt=""
                      />{' '}
                      <span>{product.title}</span>
                    </div>
                    <div className="container_bottom_content_right">
                      <span>$ {product.price} </span>

                      {category.type === 'radioButton' ? (
                        <input
                          type="radio"
                          checked={
                            selectedProducts.length > 0 &&
                            selectedProducts[0]._id === product._id
                          }
                          onChange={() => handleProductSelection(product)}
                          name="product"
                        />
                      ) : (
                        <input
                          type="checkbox"
                          checked={selectedProducts.some(
                            selectedProduct =>
                              selectedProduct._id === product._id,
                          )}
                          onChange={() => handleProductSelection(product)}
                          name="product"
                        />
                      )}
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </>
      ))}

      <div className="container_button">
        <button className="rounded btn-1">
          <FiPlus onClick={() => setCount(count + 1)} />
          <span>{count}</span>
          <FiMinus onClick={() => setCount(count - 1)} />
        </button>
        <button className="rounded  btn-2">
          Add <span className="ml-2">$&nbsp;{count * totalPrice}</span>
        </button>
      </div>
    </>
  )
}

export default ProductUi
