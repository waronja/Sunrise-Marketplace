class ApplicationController < ActionController::API
    # before_action :authorize

    # private
    
    # def authorize
    #     @current_user = User.find_by(id: session[:user_id])
    #     render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    # end

end
