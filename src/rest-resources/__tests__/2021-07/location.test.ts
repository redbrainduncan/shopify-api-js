import {Session} from '../../../auth/session';
import {Context} from '../../../context';
import {ApiVersion} from '../../../base-types';

import {Location} from '../../2021-07';

describe('Location resource', () => {
  const domain = 'test-shop.myshopify.io';
  const headers = {'X-Shopify-Access-Token': 'this_is_a_test_token'};
  const test_session = new Session('1234', domain, '1234', true);
  test_session.accessToken = 'this_is_a_test_token';

  beforeEach(() => {
    Context.API_VERSION = ApiVersion.July21;
  });

  it('test_1', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({"locations": [{"id": 655441491, "name": "50 Rideau Street", "address1": "50 Rideau Street", "address2": null, "city": "Ottawa", "zip": "K1N 9J7", "province": "Ontario", "country": "CA", "phone": null, "created_at": "2022-02-03T16:53:36-05:00", "updated_at": "2022-02-03T16:53:36-05:00", "country_code": "CA", "country_name": "Canada", "province_code": "ON", "legacy": false, "active": true, "admin_graphql_api_id": "gid://shopify/Location/655441491", "localized_country_name": "Canada", "localized_province_name": "Ontario"}, {"id": 24826418, "name": "Apple Api Shipwire", "address1": null, "address2": null, "city": null, "zip": null, "province": null, "country": "DE", "phone": null, "created_at": "2022-02-03T16:53:36-05:00", "updated_at": "2022-02-03T16:53:36-05:00", "country_code": "DE", "country_name": "Germany", "province_code": null, "legacy": true, "active": true, "admin_graphql_api_id": "gid://shopify/Location/24826418", "localized_country_name": "Germany", "localized_province_name": null}, {"id": 844681632, "name": "Apple Cupertino", "address1": null, "address2": null, "city": null, "zip": null, "province": null, "country": "US", "phone": null, "created_at": "2022-02-03T16:53:36-05:00", "updated_at": "2022-02-03T16:53:36-05:00", "country_code": "US", "country_name": "United States", "province_code": null, "legacy": false, "active": true, "admin_graphql_api_id": "gid://shopify/Location/844681632", "localized_country_name": "United States", "localized_province_name": null}, {"id": 611870435, "name": "Apple Shipwire", "address1": null, "address2": null, "city": null, "zip": null, "province": null, "country": "DE", "phone": null, "created_at": "2022-02-03T16:53:36-05:00", "updated_at": "2022-02-03T16:53:36-05:00", "country_code": "DE", "country_name": "Germany", "province_code": null, "legacy": true, "active": true, "admin_graphql_api_id": "gid://shopify/Location/611870435", "localized_country_name": "Germany", "localized_province_name": null}, {"id": 487838322, "name": "Fifth Avenue AppleStore", "address1": null, "address2": null, "city": null, "zip": null, "province": null, "country": "US", "phone": null, "created_at": "2022-02-03T16:53:36-05:00", "updated_at": "2022-02-03T16:53:36-05:00", "country_code": "US", "country_name": "United States", "province_code": null, "legacy": false, "active": true, "admin_graphql_api_id": "gid://shopify/Location/487838322", "localized_country_name": "United States", "localized_province_name": null}]}));

    await Location.all({
      session: test_session,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2021-07/locations.json',
      query: '',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

  it('test_2', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({"location": {"id": 487838322, "name": "Fifth Avenue AppleStore", "address1": null, "address2": null, "city": null, "zip": null, "province": null, "country": "US", "phone": null, "created_at": "2022-02-03T16:53:36-05:00", "updated_at": "2022-02-03T16:53:36-05:00", "country_code": "US", "country_name": "United States", "province_code": null, "legacy": false, "active": true, "admin_graphql_api_id": "gid://shopify/Location/487838322"}}));

    await Location.find({
      session: test_session,
      id: 487838322,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2021-07/locations/487838322.json',
      query: '',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

  it('test_3', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({"count": 5}));

    await Location.count({
      session: test_session,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2021-07/locations/count.json',
      query: '',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

  it('test_4', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({"inventory_levels": [{"inventory_item_id": 49148385, "location_id": 487838322, "available": 18, "updated_at": "2022-02-03T16:53:36-05:00", "admin_graphql_api_id": "gid://shopify/InventoryLevel/548380009?inventory_item_id=49148385"}, {"inventory_item_id": 808950810, "location_id": 487838322, "available": 9, "updated_at": "2022-02-03T16:53:36-05:00", "admin_graphql_api_id": "gid://shopify/InventoryLevel/548380009?inventory_item_id=808950810"}, {"inventory_item_id": 457924702, "location_id": 487838322, "available": 36, "updated_at": "2022-02-03T16:53:36-05:00", "admin_graphql_api_id": "gid://shopify/InventoryLevel/548380009?inventory_item_id=457924702"}, {"inventory_item_id": 39072856, "location_id": 487838322, "available": 27, "updated_at": "2022-02-03T16:53:36-05:00", "admin_graphql_api_id": "gid://shopify/InventoryLevel/548380009?inventory_item_id=39072856"}]}));

    await Location.inventory_levels({
      session: test_session,
      id: 487838322,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2021-07/locations/487838322/inventory_levels.json',
      query: '',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

});