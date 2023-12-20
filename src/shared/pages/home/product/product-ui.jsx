import '../../../../assets/style/home/product.scss'
import { useEffect, useState } from 'react'
import DummyImage from '../../../../assets/images/No_image_available.svg.png'
import productArray from '../../../data'
import { INPUT_TYPE } from '../../../constants/constant'
import ButtonSubmit from './button'

const ProductUi = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [selectedProducts, setSelectedProducts] = useState([])

  const handleProductSelection = (product, selectType) => {
    const isSelected = selectedProducts.some(
      selectedProduct => selectedProduct._id === product._id,
    )

    if (isSelected) {
      if (selectType === INPUT_TYPE.CHECKBOX) {
        setSelectedProducts(prevSelectedProducts =>
          prevSelectedProducts.filter(
            selectedProduct => selectedProduct._id !== product._id,
          ),
        )
      }
    } else {
      if (selectType === INPUT_TYPE.RADIO) {
        setSelectedProducts([product])
      } else {
        setSelectedProducts(prevSelectedProducts => [
          ...prevSelectedProducts,
          product,
        ])
      }
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
          <div key={category} className="container" data-aos="zoom-in">
            <div className="container_top">
              <div className="container_top_heading">
                <h4>
                  {category.type === 'radioButton' ? 'Pet Care' : 'Hair Cut'}
                </h4>
              </div>

              <hr />
            </div>
            <div className="container_bottom">
              <div className="container_top_heading">
                <h4>Select Style</h4>
              </div>
              {category.data.map(product => (
                <>
                  <div key={product.id} className="container_bottom_content">
                    <div className="container_bottom_content_left">
                      <img
                        className="w-[35px] h-[35px] mr-1.5"
                        src={DummyImage}
                        alt="Dummny"
                      />{' '}
                      <span>{product.title}</span>
                    </div>
                    <div className="container_bottom_content_right">
                      <span>$ {product.price} </span>

                      {category.type === INPUT_TYPE.RADIO ? (
                        <input
                          type="radio"
                          name={category.type}
                          checked={selectedProducts.some(
                            selectedProduct =>
                              selectedProduct._id === product._id,
                          )}
                          onChange={() =>
                            handleProductSelection(product, INPUT_TYPE.RADIO)
                          }
                        />
                      ) : (
                        <input
                          type="checkbox"
                          name={category.type}
                          checked={selectedProducts.some(
                            selectedProduct =>
                              selectedProduct._id === product._id,
                          )}
                          onChange={() =>
                            handleProductSelection(product, INPUT_TYPE.CHECKBOX)
                          }
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
      <ButtonSubmit price={totalPrice} />
    </>
  )
}

export default ProductUi
