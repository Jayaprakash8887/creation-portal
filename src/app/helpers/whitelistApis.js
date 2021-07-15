'use strict';
/**
 * @file - Sourcing Portal Backend API(s) list
 * @description - Whitelisted URL(s)
 * @since release-4.1.0
 * @version 1.0
 */
const ROLE = {
  // CONTENT_CREATOR: 'CONTENT_CREATOR',
  // CONTENT_REVIEWER: 'CONTENT_REVIEWER',
  // COURSE_MENTOR: 'COURSE_MENTOR',
  // COURSE_CREATOR: 'COURSE_CREATOR',

  // BOOK_CREATOR: 'BOOK_CREATOR',
  // BOOK_REVIEWER: 'BOOK_REVIEWER',
  // FLAG_REVIEWER: 'FLAG_REVIEWER',
  // SYSTEM_ADMINISTRATION: 'SYSTEM_ADMINISTRATION',
  ORG_ADMIN: 'ORG_ADMIN',
  SOURCING_REVIEWER: 'SOURCING_REVIEWER',
  SOURCING_USER: 'SOURCING_USER',
  // ADMIN: 'ADMIN',
  PUBLIC: 'PUBLIC',
  CONTRIBUTE_ORG_ADMIN: 'CONTRIBUTE_ORG_ADMIN',
  CONTRIBUTE_ORG_USER: 'CONTRIBUTE_ORG_USER',
  // CONTRIBUTE_ORG_REVIEWER: 'CONTRIBUTE_ORG_REVIEWER',
  // CONTRIBUTE_ORG_CREATOR: 'CONTRIBUTE_ORG_CREATOR',
  INDIVIDUAL_USER: 'INDIVIDUAL_USER',
  ANONYMOUS_USER: 'ANONYMOUS_USER'
  // TEMP_ROLE: 'TEMP_ROLE', // Use only for deprecated APIs
  // ALL: 'ALL'  // Use when user does not have PUBLIC role (Case: User bulk upload)
}

const API_LIST = {
  URL:  {
    '/content/program/v1/read/:program_id': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.PUBLIC
      ]
    },
    '/content/program/v1/create': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN
      ]
    },
    '/content/program/v1/update': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN
      ]
    },
    '/content/program/v1/publish': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN
      ]
    },
    '/content/program/v1/unlist/publish': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN
      ]
    },
    '/content/program/v1/delete': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN
      ]
    },
    '/content/program/v1/list': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.PUBLIC
      ]
    },
    '/content/program/v1/list/download': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN
      ]
    },
    '/content/program/v1/report': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN
      ]
    },
    '/content/program/v1/search': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN
      ]
    },
    '/content/program/v1/nomination/add': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.CONTRIBUTE_ORG_ADMIN,
        ROLE.INDIVIDUAL_USER
      ]
    },
    '/content/program/v1/nomination/update': { /* TODO */
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN,
        ROLE.CONTRIBUTE_ORG_USER,
        ROLE.INDIVIDUAL_USER
      ]
    },
    // '/content/program/v1/nomination/remove': {
    //   checksNeeded: []
    // },
    '/content/program/v1/nomination/list': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN,
        ROLE.CONTRIBUTE_ORG_USER,
        ROLE.INDIVIDUAL_USER
      ]
    },
    '/content/program/v1/nomination/list/download': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER
      ]
    },
    '/content/program/v1/collection/link': { /* TODO */
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN
      ]
    },
    // '/content/program/v1/nomination/contentypes/list': {
    //   checksNeeded: []
    // },
    '/content/program/v1/health': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.PUBLIC,
        ROLE.ANONYMOUS_USER
      ]
    },
    '/content/program/v1/contributor/search': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN
      ]
    },
    '/content/program/v1/collection/copy': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN
      ]
    },
    '/content/program/v1/configuration/list': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN
      ]
    },
    // '/content/program/v1/configuration/create': {
    //   checksNeeded: []
    // },
    '/content/program/v1/configuration/search': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.PUBLIC
      ]
    },
    // '/content/program/v1/configuration/update': {
    //   checksNeeded: []
    // },
    '/content/program/v1/content/publish': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER
      ]
    },
    '/content/program/v1/tenant/list': {
      checksNeeded: [],
    },
    // '/content/program/v1/sync/registry': {
    //   checksNeeded: []
    // },
    '/content/program/v1/preference/create': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.PUBLIC
      ]
    },
    '/content/program/v1/preference/update': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.PUBLIC
      ]
    },
    '/content/program/v1/preference/read': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.PUBLIC
      ]
    },
    '/content/program/v1/process/create': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN,
        ROLE.CONTRIBUTE_ORG_USER,
        ROLE.INDIVIDUAL_USER
      ]
    },
    '/content/program/v1/process/read/:process_id': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.PUBLIC
      ]
    },
    '/content/program/v1/process/update': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN,
        ROLE.CONTRIBUTE_ORG_USER,
        ROLE.INDIVIDUAL_USER
      ]
    },
    '/content/program/v1/process/search': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.PUBLIC
      ]
    },
    '/content/program/v1/feed/search': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.PUBLIC
      ]
    },
    '/content/reg/search': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.PUBLIC
      ]
    },
    '/content/reg/update': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN,
        ROLE.CONTRIBUTE_ORG_USER,
        ROLE.INDIVIDUAL_USER
      ]
    },
    '/content/reg/read': {
        checksNeeded: ['ROLE_CHECK'],
        ROLE_CHECK: [
          ROLE.PUBLIC
        ]
    },
    '/content/reg/add': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.PUBLIC
      ]
    },
    '/action/content/v3/create': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.PUBLIC
      ]
    },
    '/action/content/v3/hierarchy/add': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN,
        ROLE.CONTRIBUTE_ORG_USER,
        ROLE.INDIVIDUAL_USER
      ]
    },
    '/action/content/v3/hierarchy/remove': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN,
        ROLE.CONTRIBUTE_ORG_USER,
        ROLE.INDIVIDUAL_USER
      ]
    },
    '/action/content/v3/import': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN,
        ROLE.CONTRIBUTE_ORG_USER,
        ROLE.INDIVIDUAL_USER
      ]
    },
    '/action/itemset/v3/create': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN,
        ROLE.CONTRIBUTE_ORG_USER,
        ROLE.INDIVIDUAL_USER
      ]
    },
    '/action/itemset/v3/retire/': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN,
        ROLE.CONTRIBUTE_ORG_USER,
        ROLE.INDIVIDUAL_USER
      ]
    },
    '/action/content/v3/unlisted/publish/:contentId': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN,
        ROLE.CONTRIBUTE_ORG_USER,
        ROLE.INDIVIDUAL_USER
      ]
    },
    '/action/user/v1/search': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN
      ]
    },
    // '/v1/url/fetchmeta': {
    //   checksNeeded: []
    // },
    // '/content/course/v1/search': {
    //   checksNeeded: []
    // },
    '/content/program/v1/print/pdf': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER
      ]
    },
    '/api/org/v1/search': {
      checksNeeded: []
    },
    '/learner/user/v2/read/:userId': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.PUBLIC
      ]
    },
    '/learner/data/v1/role/read': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.PUBLIC
      ]
    },
    '/learner/framework/v1/read/:frameworkId': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.PUBLIC
      ]
    },
    '/learner/composite/v1/search': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.PUBLIC
      ]
    },
    '/learner/channel/v1/read/:channelId': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.PUBLIC
      ]
    },
    // '/learner/portal/user/v1/update': {
    //   checksNeeded: []
    // },
    '/signup': {
      checksNeeded: [],
    },
    '/learner/user/v1/signup': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.PUBLIC
      ]
    },
    '/learner/user/v1/password/reset': {
      checksNeeded: []
    },
    '/learner/otp/v1/verify': {
      checksNeeded: []
    },
    '/learner/user/v1/fuzzy/search': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.PUBLIC
      ]
    },
    '/action/content/v3/update/:do_id': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN,
        ROLE.CONTRIBUTE_ORG_USER,
        ROLE.INDIVIDUAL_USER
      ]
    },
    '/action/content/v3/upload/url/:do_id': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN,
        ROLE.CONTRIBUTE_ORG_USER,
        ROLE.INDIVIDUAL_USER
      ]
    },
    '/action/content/v3/upload/:do_id': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN,
        ROLE.CONTRIBUTE_ORG_USER,
        ROLE.INDIVIDUAL_USER
      ]
    },
    '/action/content/v3/review/:do_id': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN,
        ROLE.CONTRIBUTE_ORG_USER,
        ROLE.INDIVIDUAL_USER
      ]
    },
    '/action/content/v3/publish/:do_id': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN,
        ROLE.CONTRIBUTE_ORG_USER,
        ROLE.INDIVIDUAL_USER
      ]
    },
    '/action/content/v3/reject/:do_id': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN
      ]
    },
    '/action/content/v3/retire/:do_id': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN
      ]
    },
    '/action/assessment/v3/items/retire/:do_id': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN
      ]
    },
    '/action/system/v3/content/update/:do_id': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN
      ]
    },
    '/action/itemset/v3/update/:do_id': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN,
        ROLE.CONTRIBUTE_ORG_USER,
        ROLE.INDIVIDUAL_USER
      ]
    },
    '/action/itemset/v3/read/:do_id': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.PUBLIC
      ]
    },
    '/action/itemset/v3/review/:do_id': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN,
        ROLE.CONTRIBUTE_ORG_USER,
        ROLE.INDIVIDUAL_USER
      ]
    },
    '/action/itemset/v3/retire/:do_id': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN
      ]
    },
    '/action/questionset/v4/system/update/:do_id': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN
      ]
    },
    '/action/framework/v3/read/:frameworkId': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.PUBLIC
      ]
    },
    '/action/questionset/v1/review/:do_id': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN,
        ROLE.CONTRIBUTE_ORG_USER,
        ROLE.INDIVIDUAL_USER
      ]
    },
    '/action/questionset/v1/update/:do_id': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN,
        ROLE.CONTRIBUTE_ORG_USER,
        ROLE.INDIVIDUAL_USER
      ]
    },
    '/action/questionset/v1/publish/:do_id': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN,
        ROLE.CONTRIBUTE_ORG_USER,
        ROLE.INDIVIDUAL_USER
      ]
    },
    '/action/questionset/v1/reject/:do_id': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN
      ]
    },
    '/action/questionset/v1/read/:do_id': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.PUBLIC
      ]
    },
    '/action/questionset/v1/hierarchy/:do_id': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.PUBLIC
      ]
    },
    '/action/question/v1/read/:do_id': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.PUBLIC
      ]
    },
    '/action/question/v1/review/:do_id': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN,
        ROLE.CONTRIBUTE_ORG_USER,
        ROLE.INDIVIDUAL_USER
      ]
    },
    '/action/question/v1/publish/:do_id': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN,
        ROLE.CONTRIBUTE_ORG_USER,
        ROLE.INDIVIDUAL_USER
      ]
    },
    '/action/question/v1/update/:do_id': {
      checksNeeded: ['ROLE_CHECK'],
      ROLE_CHECK: [
        ROLE.ORG_ADMIN,
        ROLE.SOURCING_USER,
        ROLE.CONTRIBUTE_ORG_ADMIN,
        ROLE.CONTRIBUTE_ORG_USER,
        ROLE.INDIVIDUAL_USER
      ]
    },
    '/content/data/v1/telemetry': {
      checksNeeded: []
    }
  },
  URL_PATTERN: [
    '/content/program/v1/read/:program_id',
    '/content/program/v1/process/read/:process_id',
    '/action/content/v3/unlisted/publish/:contentId',
    '/learner/user/v2/read/:userId',
    '/learner/framework/v1/read/:frameworkId',
    '/learner/channel/v1/read/:channelId',
    '/action/content/v3/update/:do_id',
    '/action/content/v3/upload/url/:do_id',
    '/action/content/v3/upload/:do_id',
    '/action/content/v3/review/:do_id',
    '/action/content/v3/publish/:do_id',
    '/action/content/v3/reject/:do_id',
    '/action/content/v3/retire/:do_id',
    '/action/assessment/v3/items/retire/:do_id',
    '/action/system/v3/content/update/:do_id',
    '/action/itemset/v3/update/:do_id',
    '/action/itemset/v3/read/:do_id',
    '/action/itemset/v3/review/:do_id',
    '/action/itemset/v3/retire/:do_id',
    '/action/questionset/v4/system/update/:do_id',
    '/action/framework/v3/read/:frameworkId',
    '/action/questionset/v1/review/:do_id',
    '/action/questionset/v1/update/:do_id',
    '/action/questionset/v1/publish/:do_id',
    '/action/questionset/v1/reject/:do_id',
    '/action/questionset/v1/read/:do_id',
    '/action/questionset/v1/hierarchy/:do_id',
    '/action/question/v1/read/:do_id',
    '/action/question/v1/review/:do_id',
    '/action/question/v1/publish/:do_id',
    '/action/question/v1/update/:do_id',
  ]
}
module.exports = API_LIST;