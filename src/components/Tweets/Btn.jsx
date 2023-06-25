export const Btn = ({ isFollowing, btnText, action }) => {
  return (
    <button
      className={`rounded-[10px] py-3.5 mx-auto w-[196px] shadow-btnShadow ${
        isFollowing
          ? 'bg-green hover:bg-greenHover'
          : 'bg-white hover:bg-whiteHover'
      } font-medium font-semibold uppercase text-black text-lg leading-[22px] transition-colors`}
      type="button"
      onClick={action}
    >
      {btnText}
    </button>
  );
};
