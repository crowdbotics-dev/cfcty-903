import axios from "axios"
const cfctyAPI = axios.create({
  baseURL: "https://cfcty-903.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return cfctyAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return cfctyAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return cfctyAPI.post(`/api/v1/signup/`, payload)
}
function modules_articles_article_list(payload) {
  return cfctyAPI.get(`/modules/articles/article/`)
}
function modules_articles_article_create(payload) {
  return cfctyAPI.post(`/modules/articles/article/`, payload)
}
function modules_articles_article_retrieve(payload) {
  return cfctyAPI.get(`/modules/articles/article/${payload.id}/`)
}
function modules_articles_article_update(payload) {
  return cfctyAPI.put(`/modules/articles/article/${payload.id}/`, payload)
}
function modules_articles_article_partial_update(payload) {
  return cfctyAPI.patch(`/modules/articles/article/${payload.id}/`, payload)
}
function modules_articles_article_destroy(payload) {
  return cfctyAPI.delete(`/modules/articles/article/${payload.id}/`)
}
function modules_booking_booking_list(payload) {
  return cfctyAPI.get(`/modules/booking/booking/`, {
    params: { page: payload.page, page_size: payload.page_size }
  })
}
function modules_booking_booking_create(payload) {
  return cfctyAPI.post(`/modules/booking/booking/`, payload)
}
function modules_booking_booking_details_list(payload) {
  return cfctyAPI.get(`/modules/booking/booking-details/`, {
    params: { page: payload.page, page_size: payload.page_size }
  })
}
function modules_booking_booking_details_create(payload) {
  return cfctyAPI.post(`/modules/booking/booking-details/`, payload)
}
function modules_booking_booking_details_retrieve(payload) {
  return cfctyAPI.get(`/modules/booking/booking-details/${payload.id}/`)
}
function modules_booking_booking_details_update(payload) {
  return cfctyAPI.put(
    `/modules/booking/booking-details/${payload.id}/`,
    payload
  )
}
function modules_booking_booking_details_partial_update(payload) {
  return cfctyAPI.patch(
    `/modules/booking/booking-details/${payload.id}/`,
    payload
  )
}
function modules_booking_booking_details_destroy(payload) {
  return cfctyAPI.delete(`/modules/booking/booking-details/${payload.id}/`)
}
function modules_booking_booking_retrieve(payload) {
  return cfctyAPI.get(`/modules/booking/booking/${payload.id}/`)
}
function modules_booking_booking_update(payload) {
  return cfctyAPI.put(`/modules/booking/booking/${payload.id}/`, payload)
}
function modules_booking_booking_partial_update(payload) {
  return cfctyAPI.patch(`/modules/booking/booking/${payload.id}/`, payload)
}
function modules_booking_booking_destroy(payload) {
  return cfctyAPI.delete(`/modules/booking/booking/${payload.id}/`)
}
function modules_booking_create_booking_list(payload) {
  return cfctyAPI.get(`/modules/booking/create-booking/`, {
    params: { page: payload.page, page_size: payload.page_size }
  })
}
function modules_booking_create_booking_create(payload) {
  return cfctyAPI.post(`/modules/booking/create-booking/`, payload)
}
function modules_booking_create_booking_retrieve(payload) {
  return cfctyAPI.get(`/modules/booking/create-booking/${payload.id}/`)
}
function modules_booking_create_booking_update(payload) {
  return cfctyAPI.put(`/modules/booking/create-booking/${payload.id}/`, payload)
}
function modules_booking_create_booking_partial_update(payload) {
  return cfctyAPI.patch(
    `/modules/booking/create-booking/${payload.id}/`,
    payload
  )
}
function modules_booking_create_booking_destroy(payload) {
  return cfctyAPI.delete(`/modules/booking/create-booking/${payload.id}/`)
}
function modules_booking_penalties_list(payload) {
  return cfctyAPI.get(`/modules/booking/penalties/`, {
    params: { page: payload.page, page_size: payload.page_size }
  })
}
function modules_booking_penalties_create(payload) {
  return cfctyAPI.post(`/modules/booking/penalties/`, payload)
}
function modules_booking_penalties_retrieve(payload) {
  return cfctyAPI.get(`/modules/booking/penalties/${payload.id}/`)
}
function modules_booking_penalties_update(payload) {
  return cfctyAPI.put(`/modules/booking/penalties/${payload.id}/`, payload)
}
function modules_booking_penalties_partial_update(payload) {
  return cfctyAPI.patch(`/modules/booking/penalties/${payload.id}/`, payload)
}
function modules_booking_penalties_destroy(payload) {
  return cfctyAPI.delete(`/modules/booking/penalties/${payload.id}/`)
}
function modules_booking_plans_list(payload) {
  return cfctyAPI.get(`/modules/booking/plans/`, {
    params: { page: payload.page, page_size: payload.page_size }
  })
}
function modules_booking_plans_create(payload) {
  return cfctyAPI.post(`/modules/booking/plans/`, payload)
}
function modules_booking_plans_retrieve(payload) {
  return cfctyAPI.get(`/modules/booking/plans/${payload.id}/`)
}
function modules_booking_plans_update(payload) {
  return cfctyAPI.put(`/modules/booking/plans/${payload.id}/`, payload)
}
function modules_booking_plans_partial_update(payload) {
  return cfctyAPI.patch(`/modules/booking/plans/${payload.id}/`, payload)
}
function modules_booking_plans_destroy(payload) {
  return cfctyAPI.delete(`/modules/booking/plans/${payload.id}/`)
}
function modules_booking_shopify_booking_retrieve(payload) {
  return cfctyAPI.get(`/modules/booking/shopify/booking/`)
}
function modules_booking_shopify_booking_create(payload) {
  return cfctyAPI.post(`/modules/booking/shopify/booking/`)
}
function rest_auth_login_create(payload) {
  return cfctyAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return cfctyAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return cfctyAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return cfctyAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return cfctyAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return cfctyAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return cfctyAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return cfctyAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return cfctyAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return cfctyAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return cfctyAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_articles_article_list,
  modules_articles_article_create,
  modules_articles_article_retrieve,
  modules_articles_article_update,
  modules_articles_article_partial_update,
  modules_articles_article_destroy,
  modules_booking_booking_list,
  modules_booking_booking_create,
  modules_booking_booking_details_list,
  modules_booking_booking_details_create,
  modules_booking_booking_details_retrieve,
  modules_booking_booking_details_update,
  modules_booking_booking_details_partial_update,
  modules_booking_booking_details_destroy,
  modules_booking_booking_retrieve,
  modules_booking_booking_update,
  modules_booking_booking_partial_update,
  modules_booking_booking_destroy,
  modules_booking_create_booking_list,
  modules_booking_create_booking_create,
  modules_booking_create_booking_retrieve,
  modules_booking_create_booking_update,
  modules_booking_create_booking_partial_update,
  modules_booking_create_booking_destroy,
  modules_booking_penalties_list,
  modules_booking_penalties_create,
  modules_booking_penalties_retrieve,
  modules_booking_penalties_update,
  modules_booking_penalties_partial_update,
  modules_booking_penalties_destroy,
  modules_booking_plans_list,
  modules_booking_plans_create,
  modules_booking_plans_retrieve,
  modules_booking_plans_update,
  modules_booking_plans_partial_update,
  modules_booking_plans_destroy,
  modules_booking_shopify_booking_retrieve,
  modules_booking_shopify_booking_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
