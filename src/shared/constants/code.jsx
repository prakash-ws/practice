import { FiPlus, FiMinus } from 'react-icons/fi'
import '../../../../assets/style/home/product.scss'
import { useState } from 'react'
import DummyImage from '../../../../assets/images/No_image_available.svg.png'
import productArray from '../../../data'

const Product = () => {
  const [count, setCount] = useState(1)
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <>
      {productArray.map(category => (
        <>
          <div key={category} className="container">
            {/* input type radio  */}

            <div className="container_top">
              <div className="container_top_heading">
                <h4>{category.type === 'radioButton' ? 'Pet CARE' : 'Mens Haircut'}</h4>
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
                            selectedProduct &&
                            selectedProduct._id === product._id
                          }
                          onChange={() => setSelectedProduct(product)}
                        />
                      ) : (
                        <input
                          type="checkbox"
                          checked={
                            selectedProduct &&
                            selectedProduct._id === product._id
                          }
                          onChange={() => setSelectedProduct(product)}
                        />
                      )}
                    </div>
                  </div>
                </>
              ))}
              {/* <div className="container_bottom_content">
                <div className="container_bottom_content_left">
                  <img className="w-[35px] h-[35px]" src={DummyImage} alt="" />{' '}
                  <span>Men&apos;s Haircut</span>
                </div>
                <div className="container_bottom_content_right">
                  <span>$ 40 </span>

                  <input type="checkbox" />
                </div>
              </div>
              <div className="container_bottom_content">
                <div className="container_bottom_content_left">
                  <img className="w-[35px] h-[35px]" src={DummyImage} alt="" />{' '}
                  <span>Men&apos;s Haircut</span>
                </div>
                <div className="container_bottom_content_right">
                  <span>$ 40 </span>

                  <input type="checkbox" />
                </div>
              </div> */}
            </div>
            <hr />
          </div>
          {/* input type radio  */}
          {/* input type checkbox  */}
          {/* <div className="container">
            <div className="container_top">
              <div className="container_top_heading">
                <h4>{category.type === 'radioButton' ? '' : 'Pet Care'}</h4>
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
              <div className="container_bottom_content">
                <div className="container_bottom_content_left">
                  <img className="w-[35px] h-[35px]" src={DummyImage} alt="" />{' '}
                  <span>Men&apos;s Haircut</span>
                </div>
                <div className="container_bottom_content_right">
                  <span>$ 40 </span>

                  <input type="checkbox" />
                </div>
              </div>
              <div className="container_bottom_content">
                <div className="container_bottom_content_left">
                  <img className="w-[35px] h-[35px]" src={DummyImage} alt="" />{' '}
                  <span>Men&apos;s Haircut</span>
                </div>
                <div className="container_bottom_content_right">
                  <span>$ 40 </span>

                  <input type="checkbox" />
                </div>
              </div>
              <div className="container_bottom_content">
                <div className="container_bottom_content_left">
                  <img className="w-[35px] h-[35px]" src={DummyImage} alt="" />{' '}
                  <span>Men&apos;s Haircut</span>
                </div>
                <div className="container_bottom_content_right">
                  <span>$ 40 </span>

                  <input type="checkbox" />
                </div>
              </div>
            </div>
            <hr />
          </div> */}
        </>
      ))}
      {/* input type checkbox  */}

      <div className="container_button">
        <button className="rounded btn-1">
          <FiPlus onClick={() => setCount(count + 1)} />
          <span>{count}</span>
          <FiMinus onClick={() => setCount(count - 1)} />
        </button>
        <button className="rounded  btn-2">
          Add{' '}
          <span className="ml-2">
            $&nbsp;{count * (selectedProduct ? selectedProduct.price : 0)}
          </span>
        </button>
      </div>
    </>
  )
}

export default Product
