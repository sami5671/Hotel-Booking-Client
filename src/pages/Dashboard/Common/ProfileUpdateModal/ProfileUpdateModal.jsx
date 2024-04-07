import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ImSpinner2 } from "react-icons/im";

const ProfileUpdateModal = ({
  closeModal,
  isOpen,
  handleUpdateUserProfile,
  loading,
}) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Change Your User & Photo
                  </Dialog.Title>
                  <div className="mt-2">
                    {/* form update */}
                    <form onSubmit={handleUpdateUserProfile}>
                      <div>
                        <div>
                          <label htmlFor="email" className="block mb-2 text-sm">
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter Your Name Here"
                            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                            data-temp-mail-org="0"
                          />
                        </div>
                        <div>
                          <label htmlFor="image" className="block mb-2 text-sm">
                            Select Image:
                          </label>
                          <input
                            required
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                          />
                        </div>
                        <button type="submit" className="border-2 mt-12">
                          {loading ? (
                            <ImSpinner2 className="animate-spin" />
                          ) : (
                            "Update Profile"
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div></div>
    </>
  );
};

export default ProfileUpdateModal;
