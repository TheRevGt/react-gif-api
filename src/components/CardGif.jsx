export const CardGif = ({url, title}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={url} alt={title} />
        <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</p>
    </div>
  )
}
