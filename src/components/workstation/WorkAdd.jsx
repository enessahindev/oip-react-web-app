function WorkAdd() {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Work station
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600"></p>
      </div>
      <form
        action="/"
        method="post"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="work-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              File Number
            </label>
            <div className="mt-3">
              <input
                type="text"
                name="file-number"
                id="file-number"
                placeholder="FN062935"
                autoComplete="given-file-number"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="sending-date"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Sending date
            </label>
            <div className="mt-3">
              <input
                type="date"
                name="sending-date"
                id="sending-date"
                placeholder="18/07/2023"
                autoComplete="given-sending-date"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="subject"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Subject
            </label>
            <div className="mt-3">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Work Subject"
                autoComplete="given-subject"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-3">
              <textarea
                name="message"
                id="message"
                placeholder="Work Contents"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="document"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Select Document
            </label>
            <div className="mt-3">
              <input
                type="file"
                name="upload-file"
                id="upload-file"
                autoComplete="given-file"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Send Draft
          </button>
        </div>
      </form>
    </div>
  );
}

export default WorkAdd;
