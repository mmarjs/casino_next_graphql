import {gql} from '@apollo/client';

export const GET_ARTICLES = gql`query getBlog($filters: ArticleFiltersInput, $pagination: PaginationArg) {
    articles(filters:$filters, pagination:$pagination, sort:"createdAt:desc") {
        data {
            id
            attributes {
                title
                summary
                slug
                published_on
                category_ids {
                    data {
                        attributes {
                            name
                            type
                            slug
                        }
                    }
                }
                featured_image {
                    data {
                        attributes {
                            url
                            height
                            width
                        }
                    }
                }
                featured_slots {
                    top_border_color
                    button_label
                    link
                    image {
                        data {
                            attributes {
                                url
                                width
                                height
                            }
                        }
                    }
                    special_offer_label
                    special_offer_enabled
                    bonuses {
                        label
                        value
                    }
                }
            }
        }
        meta{
            pagination{
                pageCount
                page
                pageSize
            }
        }
    }
}`


export const GET_ARTICLE = gql`query getBlog($filters: ArticleFiltersInput) {
    articles(filters:$filters, pagination:{page:1, pageSize:1}) {
        data {
            id
            attributes {
                title
                summary
                slug
                content_body
                published_on
                meta_title
                meta_description
                meta_image {
                    data {
                        attributes {
                            url
                            height
                            width
                        }
                    }
                }
                category_ids {
                    data {
                        attributes {
                            name
                            type
                            slug
                        }
                    }
                }
                featured_image {
                    data {
                        attributes {
                            url
                            height
                            width
                        }
                    }
                }
                header_image {
                    data {
                        attributes {
                            url
                            height
                            width
                        }
                    }
                }
                featured_slots {
                    top_border_color
                    button_label
                    link
                    image {
                        data {
                            attributes {
                                url
                                width
                                height
                            }
                        }
                    }
                    special_offer_label
                    special_offer_enabled
                    bonuses {
                        label
                        value
                    }
                }
            }
        }
    }
}`