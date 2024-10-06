import React from "react";

const ProductDescription = () => {
  return (
    <div className="mt-20">
        <div className="flex gap-3 mb-4">
            <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
            Description
            </button>
            <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
            Care Guide
            </button>
            <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
            Size Guide
            </button>
        </div>
        <div className="flex flex-col pb-16">
            <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
            delectus consequatur sint repellat velit, saepe quia doloremque nemo
            dolor pariatur blanditiis iure adipisci at ex, quis assumenda dolorum
            laborum reiciendis voluptas est ipsum. Blanditiis a non nisi molestiae
            facere, voluptatem commodi ipsa illo, unde sequi, iusto ut
            consequuntur quia. Libero.
            </p>
            <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            aperiam ipsam explicabo itaque ut earum eveniet at repellat sed
            ducimus inventore placeat, ratione saepe aut excepturi neque quia!
            </p>
        </div>
    </div>
  );
};

export default ProductDescription;
