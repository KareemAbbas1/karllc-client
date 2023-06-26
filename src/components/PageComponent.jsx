/* eslint-disable react/prop-types */

const PageComponent = ({ children }) => {
  
  return (
      <>
          <main
              // className="flex items-center w-screen h-auto border border-black"
              // style={{ height: 'calc(100vh - 104px)'}}
          >
              <div className="max-w-screen-xl flex flex-col items-center justify-center mx-auto px-2 xl:px-12 2xl:px-0 ">
                  {children}
              </div>
          </main>
      </>
  )
}

export default PageComponent