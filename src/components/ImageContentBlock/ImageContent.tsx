const ImageContent = () => {
  return (
    <>
      <div className="pb-10 pt-5">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full space-y-7 text-md font-thin leading-tight md:w-3/5 md:pr-10 md:text-lg">
              <h2 className="font-raleway font-bold text-blue md:text-xl">Why Valadate?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, ante
                ut fermentum blandit, odio felis interdum enim, vel dignissim nisi nisi eget arcu.
                Fusce porttitor lorem vel dui egestas, nec posuere magna egestas. Etiam congue lacus
                nec urna convallis, sed consectetur ipsum hendrerit. Donec neque massa, dictum at
                gravida at, molestie vel dui. Suspendisse magna sapien, condimentum sed gravida nec,
                tristique ac mauris. Etiam nibh lorem, dapibus et mi ut, faucibus fermentum ex.
                Quisque feugiat urna et ligula posuere dignissim. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Nullam feugiat nunc elementum,
                egestas nisi vitae, ultrices magna. Duis odio sem, imperdiet id ante a, finibus
                ultricies augue. Nunc quis sodales justo.
              </p>
              <p>
                Ut eget tortor elementum, tincidunt libero vitae, consequat quam. Proin congue
                viverra urna nec varius. Sed sagittis massa sit amet elit molestie consequat nec id
                nisl. Fusce gravida tellus eget nulla finibus, id convallis leo maximus. Sed viverra
                lorem libero, id consequat nulla volutpat eu. Integer posuere porta risus, ut
                gravida sapien luctus sit amet. Sed mollis, eros id venenatis volutpat, sapien
                tellus aliquam ipsum, in porta metus ante eu est. Quisque commodo eu libero
                hendrerit placerat. Mauris et quam suscipit nibh sodales consequat vitae nec eros.
                Nam bibendum dolor vitae neque mollis imperdiet. Cras bibendum sapien volutpat dolor
                feugiat molestie et sed nisl. Nam ac fringilla sem. Aliquam non nisl pharetra lectus
                finibus pretium. Ut interdum quam a velit interdum, sit amet suscipit ante lacinia.
                Suspendisse potenti. Quisque tempus cursus efficitur.
              </p>
            </div>
            <div className="-order-1 w-full md:order-1 md:w-2/5">
              <figure className="text-center">
                <img
                  src="assets/images/about-validate.png"
                  className="img-fluid inline-block"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageContent;
