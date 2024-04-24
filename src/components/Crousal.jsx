import React from 'react'

const Crousal = () => {



  let carousel_data = [
    "https://imgs.search.brave.com/_cHcWUIspM8IFSnTipcATQS2aUZzxjy3BZsmb9z8kMk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/NjM5MzMyL3Bob3Rv/L3dpbnRlci1sYW5k/c2NhcGUtd2l0aC1z/bm93LWFuZC10cmVl/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Qi1BWFBWY2Nq/YzBSWmZGQXgzQmlp/SkZyaXlLNGNEcjVV/YXRuRE5ZNzQ4cz0",
    "https://imgs.search.brave.com/9t_JppSd-lvkLod0ka_JoohrdsiUjIQybESPt0ikSvo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pcHQu/aW1naXgubmV0LzIw/MTY5MC94LzAvdWx0/aW1hdGUtZ3VpZGUt/dG8tbGFuZHNjYXBl/LXBob3RvZ3JhcGh5/LTEwOS1qcGc_YXV0/bz1jb21wcmVzcyxm/b3JtYXQmY2g9V2lk/dGgsRFBSJmRwcj0x/Jml4bGliPXBocC0z/LjMuMCZhdXRvPWZv/cm1hdCxjb21wcmVz/cyZmaXQ9Y3JvcCZo/PXVuZGVmaW5lZA",
    "https://imgs.search.brave.com/fioN5Qu_QTlGyt9wXCP32Wd9RA29eVfI0zWXfn9c3Qc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE3/MTg4Njg4L3Bob3Rv/L21vdW50YWluLWxh/bmRzY2FwZS53ZWJw/P2I9MSZzPTYxMng2/MTImdz0wJms9MjAm/Yz04MWY1SGFNdG9Q/TlVyZGZhNGhuUzhO/Y3dFZ0Q5dEgybm5U/VUJ1MjVNc3VnPQ"
  ];

  const [index, setIndex] = React.useState(0);

  function moveRight() {
    setIndex((index + 1) % carousel_data.length);
  }

  function moveLeft() {
    setIndex((index - 1 + carousel_data.length) % carousel_data.length);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      moveRight();
    } else if (event.key === 'ArrowLeft') {
      moveLeft();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });




  return (
    <div className='h-96 flex justify-center my-10'>
    <button onClick={moveLeft}><img className='w-8 h-8' src="https://i.pinimg.com/564x/83/26/9e/83269efa1e0d1370f5f7f9b7b38819e2.jpg" alt="" /></button>
    <div className='h-96 w-[1200px] overflow-hidden mx-5'>
      <img className='h-96 w-[1200px]' src={carousel_data[index]} alt="" />
    </div>

    <button onClick={moveRight}><img className='w-8 h-8 rotate-180' src="https://i.pinimg.com/564x/83/26/9e/83269efa1e0d1370f5f7f9b7b38819e2.jpg" alt="" /></button>
  </div>
  )
}

export default Crousal