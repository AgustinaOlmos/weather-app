import { FC, Dispatch, SetStateAction } from "react";

type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const LimitModal: FC<Props> = ({ setShowModal }) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50 mx-4 md:m-auto top-5 md:top-10">
      <div className="bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 p-8 rounded-2xl shadow ring-2 ring-neutral-500/50 ring-offset-2">
        <h2 className="mb-2 text-sm md:text-base text-center">
          Has alcanzado el límite de uso gratuito
        </h2>
        <p className="mb-2 text-sm md:text-base text-center">
          Para más búsquedas, por favor suscríbete a la versión
          <a
            href="/premium"
            className="text-sm md:text-base font-semibold italic tracking-wider hover:underline-offset-8 hover:text-white"
          >
            {" "}
            Premium
          </a>
          .
        </p>
        <div className="flex justify-center mt-4 md:mt-6">
          <button
            className="border border-zinc-600 font-semibold uppercase rounded-2xl w-40 h-7 text-sm md:text-base hover:bg-zinc-500 hover:text-slate-200 hover:border-white"
            onClick={() => setShowModal(false)}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default LimitModal;
