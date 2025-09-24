const ErrorMessage = ({ message, onRetry }) => {
    return (
        <div className="flex flex-col items-center justify-center py-20" style={{
            animation: 'slide-up 0.6s ease-out'
        }}>
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl text-center max-w-md mx-auto">
                <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">❌</span>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Oops! Something went wrong
                </h2>

                <p className="text-gray-600 mb-6 leading-relaxed">
                    {message}
                </p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-yellow-800">
                        💡 <strong>Tip:</strong> If you're seeing CORS errors, try running this from a web server or use a CORS proxy service.
                    </p>
                </div>

                <button
                    onClick={onRetry}
                    className="text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    style={{
                        background: 'linear-gradient(45deg, #ef4444, #ec4899)'
                    }}
                >
                    🔄 Try Again
                </button>
            </div>
        </div>
    )
}

export default ErrorMessage