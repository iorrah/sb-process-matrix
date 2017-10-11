/**
 * Simple data service (simulating an API request)
 */
class DeliverablesService {

    constructor($timeout) {
        this.$timeout = $timeout;
    }

    fetchAll() {

        return this.$timeout(300)
            .then(() => {
                return dummyData;
            });
    }

}

DeliverablesService.$inject = ['$timeout'];

export {DeliverablesService}

var dummyData = [{
    "id": "0206baa0-da64-4062-f971-ffbba0e9f589",
    "name": "Life & Style",
    "code": "S 1.15",
    "description": "Shop",
    "utcDate": 1414364400000,
    "category": "ROOM",
    "activities": [
        {
            "id": "37a93933-9e50-4c43-fef9-c615c98799bb",
            "name": "Slings Up installed",
            "utcStart": 1414364400000,
            "utcEnd": 1414364400000,
            "progress": 0,
            "step": 6,
            "color": "AAAA11"
        },
        {
            "id": "3dba19cb-d5a3-4e54-b900-7315331aceb6",
            "name": "Connectors Up installed",
            "utcStart": 1414364400000,
            "utcEnd": 1414364400000,
            "progress": 0,
            "step": 5,
            "color": "3B3EAC"
        },
        {
            "id": "57bd2908-5062-4bd2-d588-7e920b4336cd",
            "name": "installed",
            "utcStart": 1414364400000,
            "utcEnd": 1414364400000,
            "progress": 0,
            "step": 4,
            "color": "AAAA11"
        },
        {
            "id": "5c489edc-4351-4bec-e3b1-bfc9b62048a3",
            "name": "Connectors Down installed",
            "utcStart": 1414364400000,
            "utcEnd": 1414364400000,
            "progress": 0,
            "step": 5,
            "color": "3366CC"
        },
        {
            "id": "5e636b09-091f-4fda-fb0b-c489c8c37da1",
            "name": "dispatched",
            "utcStart": 1414364400000,
            "utcEnd": 1414364400000,
            "progress": 0,
            "step": 2,
            "color": "329262"
        },
        {
            "id": "706e798a-0b4c-4721-cf7f-c05e597d6fde",
            "name": "Slings Down installed",
            "utcStart": 1414364400000,
            "utcEnd": 1414364400000,
            "progress": 0,
            "step": 6,
            "color": "994499"
        },
        {
            "id": "94b220ef-22ec-4a64-c9ee-23373d24659a",
            "name": "ready for assembly",
            "utcStart": 1414364400000,
            "utcEnd": 1414364400000,
            "progress": 0,
            "step": 1,
            "color": "0099C6"
        },
        {
            "id": "d18da1f2-ef97-4ad6-d000-3fbf04d6f4fa",
            "name": "delivered",
            "utcStart": 1414364400000,
            "utcEnd": 1414364400000,
            "progress": 0,
            "step": 3,
            "color": "316395"
        }
    ],
    "structurePath": [
        "section C",
        "First Floor"
    ]
},
    {
        "id": "0d1b9729-84d4-4af2-f49f-808ab456fd7b",
        "name": "Technical Equipment T 1.1",
        "code": "T 1.1",
        "description": "Technical Equipment",
        "utcDate": 1416006000000,
        "category": "ROOM",
        "activities": [
            {
                "id": "0baebd4a-ac6b-4225-d0e0-431faf4abc20",
                "name": "Slings Down installed",
                "utcStart": 1416006000000,
                "utcEnd": 1416006000000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            },
            {
                "id": "1c4a1ade-29fb-46d7-d70b-43bd1c1ce6e8",
                "name": "dispatched",
                "utcStart": 1416006000000,
                "utcEnd": 1416006000000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            },
            {
                "id": "1f5279b0-0b1a-4bc0-8422-353af3207397",
                "name": "installed",
                "utcStart": 1416006000000,
                "utcEnd": 1416006000000,
                "progress": 0,
                "step": 4,
                "color": "AAAA11"
            },
            {
                "id": "a97d8ae9-1fd4-45dc-99be-fbdae554af13",
                "name": "delivered",
                "utcStart": 1416006000000,
                "utcEnd": 1416006000000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            },
            {
                "id": "ad5c856d-63d2-4b8f-c8ba-18bf5bd6c394",
                "name": "Connectors Down installed",
                "utcStart": 1416006000000,
                "utcEnd": 1416006000000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "af5fa080-637b-4036-c29d-29dbc2e2ec8e",
                "name": "Slings Up installed",
                "utcStart": 1416006000000,
                "utcEnd": 1416006000000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            },
            {
                "id": "c4aa766c-be80-480d-9f05-55ee4df06d5e",
                "name": "Connectors Up installed",
                "utcStart": 1416006000000,
                "utcEnd": 1416006000000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "e120a91a-3837-46e9-c3b8-24c018d4b1c5",
                "name": "ready for assembly",
                "utcStart": 1416006000000,
                "utcEnd": 1416006000000,
                "progress": 0,
                "step": 1,
                "color": "0099C6"
            }
        ],
        "structurePath": [
            "Ground Floor",
            "section B"
        ]
    },
    {
        "id": "1186b43b-1c8e-45d7-e1d8-fc8a6abe0884",
        "name": "German Apparel 2",
        "code": "S 1.5",
        "description": "Shop",
        "utcDate": 1413496800000,
        "category": "ROOM",
        "activities": [
            {
                "id": "3f279f76-fd81-4b44-b5e8-f908a9ada2ea",
                "name": "Connectors Up installed",
                "utcStart": 1413496800000,
                "utcEnd": 1413496800000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "83688ffd-1ca2-4cc1-e672-b1f414de9619",
                "name": "Slings Down installed",
                "utcStart": 1413496800000,
                "utcEnd": 1413496800000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            },
            {
                "id": "869d780e-27b0-4044-9e03-906e660ad962",
                "name": "ready for assembly",
                "utcStart": 1413496800000,
                "utcEnd": 1413496800000,
                "progress": 50,
                "step": 1,
                "color": "0099C6"
            },
            {
                "id": "90b15c99-87c4-42f1-bc4f-ad3f8d768e4c",
                "name": "delivered",
                "utcStart": 1413496800000,
                "utcEnd": 1413496800000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            },
            {
                "id": "9c9f7e9a-b421-4142-f4bd-8776a189bade",
                "name": "dispatched",
                "utcStart": 1413496800000,
                "utcEnd": 1413496800000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            },
            {
                "id": "b791ce16-c8f8-4efd-ef7f-6e8027f3e612",
                "name": "Connectors Down installed",
                "utcStart": 1413496800000,
                "utcEnd": 1413496800000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "c3711619-b601-4a35-882a-23a42273df07",
                "name": "installed",
                "utcStart": 1413496800000,
                "utcEnd": 1413496800000,
                "progress": 0,
                "step": 4,
                "color": "AAAA11"
            },
            {
                "id": "d726e1e7-408d-463d-f77c-eccd14958511",
                "name": "Slings Up installed",
                "utcStart": 1413496800000,
                "utcEnd": 1413496800000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            }
        ],
        "structurePath": [
            "section B",
            "First Floor"
        ]
    },
    {
        "id": "1ed4e83d-e933-40e3-fdf2-952ce8305155",
        "name": "Shoemaker Shoes 2",
        "code": "S 1.12",
        "description": "Shop",
        "utcDate": 1414101600000,
        "category": "ROOM",
        "activities": [
            {
                "id": "00c8b2d0-8ce7-4b8a-c22e-953cba215b7f",
                "name": "Slings Up installed",
                "utcStart": 1414101600000,
                "utcEnd": 1414101600000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            },
            {
                "id": "055a6562-7973-46a6-d649-a084f79e56e2",
                "name": "Connectors Up installed",
                "utcStart": 1414101600000,
                "utcEnd": 1414101600000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "268a1347-f82e-41cf-ac2b-3d329b2d2486",
                "name": "ready for assembly",
                "utcStart": 1414101600000,
                "utcEnd": 1414101600000,
                "progress": 0,
                "step": 1,
                "color": "0099C6"
            },
            {
                "id": "6f2f2b31-6d3b-4d60-d2e4-aa345d0ad2e4",
                "name": "Connectors Down installed",
                "utcStart": 1414101600000,
                "utcEnd": 1414101600000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "7a817087-72bd-46bc-d795-b3d6a528205d",
                "name": "dispatched",
                "utcStart": 1414101600000,
                "utcEnd": 1414101600000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            },
            {
                "id": "85e453bc-e488-4618-9299-b3aaf9c3d101",
                "name": "Slings Down installed",
                "utcStart": 1414101600000,
                "utcEnd": 1414101600000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            },
            {
                "id": "b59b649a-52b5-48a9-aa23-bbdf5325f540",
                "name": "delivered",
                "utcStart": 1414101600000,
                "utcEnd": 1414101600000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            },
            {
                "id": "fa9bd450-7f16-4c41-c4c7-4403730f342b",
                "name": "installed",
                "utcStart": 1414101600000,
                "utcEnd": 1414101600000,
                "progress": 0,
                "step": 4,
                "color": "AAAA11"
            }
        ],
        "structurePath": [
            "section C",
            "First Floor"
        ]
    },
    {
        "id": "1f256eb2-67be-438a-8024-761ce38d4907",
        "name": "FixFox",
        "code": "S 0.4",
        "description": "Shop",
        "utcDate": 1412373600000,
        "category": "ROOM",
        "activities": [
            {
                "id": "03536e4a-8925-4e68-dccf-08bc484e44a2",
                "name": "installed",
                "utcStart": 1412373600000,
                "utcEnd": 1412373600000,
                "progress": 0,
                "step": 4,
                "color": "AAAA11"
            },
            {
                "id": "48948291-2601-4018-e069-c964861af029",
                "name": "dispatched",
                "utcStart": 1412373600000,
                "utcEnd": 1412373600000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            },
            {
                "id": "82fea69b-d513-45fb-bc78-f0dea80ed057",
                "name": "Connectors Down installed",
                "utcStart": 1412373600000,
                "utcEnd": 1412373600000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "94722dc1-0281-4548-a500-1c36e66ba703",
                "name": "delivered",
                "utcStart": 1412373600000,
                "utcEnd": 1412373600000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            },
            {
                "id": "b3fd2e75-e74e-4648-fd32-bad318d57ab2",
                "name": "ready for assembly",
                "utcStart": 1412373600000,
                "utcEnd": 1412373600000,
                "progress": 0,
                "step": 1,
                "color": "0099C6"
            },
            {
                "id": "c1b9b5c0-ccb9-4197-f2a4-48fb71857804",
                "name": "Slings Down installed",
                "utcStart": 1412373600000,
                "utcEnd": 1412373600000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            },
            {
                "id": "c57026fc-53b5-4613-e748-4ec1a1e53c52",
                "name": "Connectors Up installed",
                "utcStart": 1412373600000,
                "utcEnd": 1412373600000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "d03da048-579d-45da-ba82-2cd07e51c296",
                "name": "Slings Up installed",
                "utcStart": 1412373600000,
                "utcEnd": 1412373600000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            }
        ],
        "structurePath": [
            "Ground Floor",
            "section B"
        ]
    },
    {
        "id": "214cdb4e-c5a1-4808-f365-d4495d85d020",
        "name": "Technical Equipment T 1.5",
        "code": "T 1.5",
        "description": "Technical Equipment",
        "utcDate": 1416351600000,
        "category": "ROOM",
        "activities": [
            {
                "id": "055f3bfe-d6bc-40f6-8164-0336748ec01d",
                "name": "Connectors Up installed",
                "utcStart": 1416351600000,
                "utcEnd": 1416351600000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "1bf3f3a0-639c-466d-ac7a-73582fb42e1a",
                "name": "dispatched",
                "utcStart": 1416351600000,
                "utcEnd": 1416351600000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            },
            {
                "id": "50e7c4d5-5d5c-4411-eb85-93d009494235",
                "name": "Slings Down installed",
                "utcStart": 1416351600000,
                "utcEnd": 1416351600000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            },
            {
                "id": "972af09e-1dbc-4852-e181-d86d8ec51fcc",
                "name": "delivered",
                "utcStart": 1416351600000,
                "utcEnd": 1416351600000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            },
            {
                "id": "a05e44d0-b64f-4164-9b89-d06e48ee3877",
                "name": "ready for assembly",
                "utcStart": 1416351600000,
                "utcEnd": 1416351600000,
                "progress": 0,
                "step": 1,
                "color": "0099C6"
            },
            {
                "id": "e6d35977-a625-436a-d441-7a086b68128c",
                "name": "installed",
                "utcStart": 1416351600000,
                "utcEnd": 1416351600000,
                "progress": 0,
                "step": 4,
                "color": "AAAA11"
            },
            {
                "id": "e73d712a-1ce8-4ac3-8efd-bba42a3e6e48",
                "name": "Connectors Down installed",
                "utcStart": 1416351600000,
                "utcEnd": 1416351600000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "e95de372-ac5f-4f3d-dd2a-ec764e64a49e",
                "name": "Slings Up installed",
                "utcStart": 1416351600000,
                "utcEnd": 1416351600000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            }
        ],
        "structurePath": [
            "section C",
            "Ground Floor"
        ]
    },
    {
        "id": "23be760d-f841-4b06-a51b-c30da855ac0d",
        "name": "K&L 3",
        "code": "S 1.3",
        "description": "Shop",
        "utcDate": 1413324000000,
        "category": "ROOM",
        "activities": [
            {
                "id": "3df4fbf7-5beb-44ae-91d3-2d90a5811253",
                "name": "installed",
                "utcStart": 1413324000000,
                "utcEnd": 1413324000000,
                "progress": 0,
                "step": 4,
                "color": "AAAA11"
            },
            {
                "id": "4e0ef2c5-8593-4eb2-d687-5374c36e7ac8",
                "name": "Slings Down installed",
                "utcStart": 1413324000000,
                "utcEnd": 1413324000000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            },
            {
                "id": "7a334221-b664-4a16-9bc9-0985a30e9c84",
                "name": "delivered",
                "utcStart": 1413324000000,
                "utcEnd": 1413324000000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            },
            {
                "id": "9811b020-3216-4f15-c1ed-94ca8e6a49aa",
                "name": "Slings Up installed",
                "utcStart": 1413324000000,
                "utcEnd": 1413324000000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            },
            {
                "id": "9c9f2774-bf9e-428a-d776-363b5d33ede5",
                "name": "ready for assembly",
                "utcStart": 1413324000000,
                "utcEnd": 1413324000000,
                "progress": 100,
                "step": 1,
                "color": "0099C6"
            },
            {
                "id": "c4bfeab8-42ab-413f-ca52-ee45dc2ba1fe",
                "name": "dispatched",
                "utcStart": 1413324000000,
                "utcEnd": 1413324000000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            },
            {
                "id": "d3096a52-ab08-4e85-90db-9f6942e9388c",
                "name": "Connectors Down installed",
                "utcStart": 1413324000000,
                "utcEnd": 1413324000000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "f2cbf388-89b9-4fbc-9b62-c97e4607c203",
                "name": "Connectors Up installed",
                "utcStart": 1413324000000,
                "utcEnd": 1413324000000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            }
        ],
        "structurePath": [
            "First Floor",
            "section A"
        ]
    },
    {
        "id": "24e02c7b-2f9f-473d-f2c7-2733ceff545e",
        "name": "Technical Equipment T 1.2",
        "code": "T 1.2",
        "description": "Technical Equipment",
        "utcDate": 1416092400000,
        "category": "ROOM",
        "activities": [
            {
                "id": "364ba17c-9300-453b-cc59-86d10812d0f0",
                "name": "installed",
                "utcStart": 1416092400000,
                "utcEnd": 1416092400000,
                "progress": 0,
                "step": 4,
                "color": "AAAA11"
            },
            {
                "id": "413ca382-af67-4925-8d33-efc7921cb429",
                "name": "Slings Up installed",
                "utcStart": 1416092400000,
                "utcEnd": 1416092400000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            },
            {
                "id": "4598e751-8cc6-4971-c515-46e044d520bc",
                "name": "delivered",
                "utcStart": 1416092400000,
                "utcEnd": 1416092400000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            },
            {
                "id": "492fc238-d0b9-44d1-e06d-2700d2c0905d",
                "name": "dispatched",
                "utcStart": 1416092400000,
                "utcEnd": 1416092400000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            },
            {
                "id": "887f1c19-0deb-4a49-82d9-19e6c0f492e4",
                "name": "ready for assembly",
                "utcStart": 1416092400000,
                "utcEnd": 1416092400000,
                "progress": 0,
                "step": 1,
                "color": "0099C6"
            },
            {
                "id": "a47ce94b-99af-4269-f34e-240681f6b082",
                "name": "Connectors Up installed",
                "utcStart": 1416092400000,
                "utcEnd": 1416092400000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "a5a89771-1757-4101-cbb4-7a08bd17ade2",
                "name": "Connectors Down installed",
                "utcStart": 1416092400000,
                "utcEnd": 1416092400000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "fa85bcb4-c3fd-4f4c-fcb1-3ff4e343cdf5",
                "name": "Slings Down installed",
                "utcStart": 1416092400000,
                "utcEnd": 1416092400000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            }
        ],
        "structurePath": [
            "Ground Floor",
            "section B"
        ]
    },
    {
        "id": "25a41f32-7b2d-4f5c-903e-7c1e8c10eea5",
        "name": "O'Paper",
        "code": "S 0.3",
        "description": "Shop",
        "utcDate": 1412287200000,
        "category": "ROOM",
        "activities": [
            {
                "id": "427b234d-5a93-49c8-d8b7-5e01c6d9ed44",
                "name": "Slings Down installed",
                "utcStart": 1412287200000,
                "utcEnd": 1412287200000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            },
            {
                "id": "6a9036e2-7f88-4c26-8fdb-4f02a28033ef",
                "name": "ready for assembly",
                "utcStart": 1412287200000,
                "utcEnd": 1412287200000,
                "progress": 0,
                "step": 1,
                "color": "0099C6"
            },
            {
                "id": "914116fb-6410-4eb6-8151-c75d5aa08684",
                "name": "Connectors Down installed",
                "utcStart": 1412287200000,
                "utcEnd": 1412287200000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "9f948f8c-236d-4c3c-a21e-e46cfd8b04ce",
                "name": "Slings Up installed",
                "utcStart": 1412287200000,
                "utcEnd": 1412287200000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            },
            {
                "id": "a1a7d2ea-70c9-4761-f1a2-41605a0079e1",
                "name": "delivered",
                "utcStart": 1412287200000,
                "utcEnd": 1412287200000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            },
            {
                "id": "d07ebbab-ff34-44ac-b89b-2e30d1a3652e",
                "name": "Connectors Up installed",
                "utcStart": 1412287200000,
                "utcEnd": 1412287200000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "eba65b5d-9ed6-49ab-b1ce-39be7d1ed0fd",
                "name": "installed",
                "utcStart": 1412287200000,
                "utcEnd": 1412287200000,
                "progress": 0,
                "step": 4,
                "color": "AAAA11"
            },
            {
                "id": "fa9237a4-0aeb-41f3-a375-673833a1b6d6",
                "name": "dispatched",
                "utcStart": 1412287200000,
                "utcEnd": 1412287200000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            }
        ],
        "structurePath": [
            "Ground Floor",
            "section A"
        ]
    },
    {
        "id": "345acbcb-421f-4155-a827-31749ef074ec",
        "name": "König's 2",
        "code": "S 0.6",
        "description": "Shop",
        "utcDate": 1412546400000,
        "category": "ROOM",
        "activities": [
            {
                "id": "14afbe31-59ea-41b7-dde0-7ea518345e26",
                "name": "ready for assembly",
                "utcStart": 1412546400000,
                "utcEnd": 1412546400000,
                "progress": 0,
                "step": 1,
                "color": "0099C6"
            },
            {
                "id": "288050ac-fc49-49dd-8764-28bbd6f0cd35",
                "name": "dispatched",
                "utcStart": 1412546400000,
                "utcEnd": 1412546400000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            },
            {
                "id": "7b48ed08-9533-4afd-fbdb-ad2bf55936c1",
                "name": "delivered",
                "utcStart": 1412546400000,
                "utcEnd": 1412546400000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            },
            {
                "id": "81dc8915-9ee7-43cf-d9e6-a318faca9675",
                "name": "Connectors Up installed",
                "utcStart": 1412546400000,
                "utcEnd": 1412546400000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "93b4f3ed-5f9e-4cc1-8acc-84043435be82",
                "name": "installed",
                "utcStart": 1412546400000,
                "utcEnd": 1412546400000,
                "progress": 0,
                "step": 4,
                "color": "AAAA11"
            },
            {
                "id": "a96600ae-7e2c-4dff-ead3-9a1e6c0cd190",
                "name": "Connectors Down installed",
                "utcStart": 1412546400000,
                "utcEnd": 1412546400000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "b290915c-74ae-4c42-db5c-34c9f43b9a73",
                "name": "Slings Down installed",
                "utcStart": 1412546400000,
                "utcEnd": 1412546400000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            },
            {
                "id": "ff3e4044-e70b-4ad6-afcc-15e074c38df8",
                "name": "Slings Up installed",
                "utcStart": 1412546400000,
                "utcEnd": 1412546400000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            }
        ],
        "structurePath": [
            "Ground Floor",
            "section B"
        ]
    },
    {
        "id": "368f8a9d-b4b7-423c-9a9f-cdced2fda6ad",
        "name": "Coiffeur Charles",
        "code": "S 2.3",
        "description": "Shop",
        "utcDate": 1414796400000,
        "category": "ROOM",
        "activities": [
            {
                "id": "3a34c154-12d8-4c13-86b2-7637ad07251c",
                "name": "Slings Up installed",
                "utcStart": 1414796400000,
                "utcEnd": 1414796400000,
                "progress": 50,
                "step": 6,
                "color": "AAAA11"
            },
            {
                "id": "617bd633-c1e4-4151-ac1b-e0427cdcd1ed",
                "name": "dispatched",
                "utcStart": 1414796400000,
                "utcEnd": 1414796400000,
                "progress": 50,
                "step": 2,
                "color": "329262"
            },
            {
                "id": "9c6543b0-53a0-49d1-8852-20ba3c8adc37",
                "name": "Slings Down installed",
                "utcStart": 1414796400000,
                "utcEnd": 1414796400000,
                "progress": 50,
                "step": 6,
                "color": "994499"
            },
            {
                "id": "9f698e57-fed4-4a76-d56c-da4372772999",
                "name": "delivered",
                "utcStart": 1414796400000,
                "utcEnd": 1414796400000,
                "progress": 50,
                "step": 3,
                "color": "316395"
            },
            {
                "id": "c7051f50-9953-4b32-c275-d50357f92518",
                "name": "Connectors Up installed",
                "utcStart": 1414796400000,
                "utcEnd": 1414796400000,
                "progress": 50,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "d72e985c-c314-4e8a-995f-31f3962f8c96",
                "name": "Connectors Down installed",
                "utcStart": 1414796400000,
                "utcEnd": 1414796400000,
                "progress": 50,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "d7d19499-5f9a-4620-a73d-543aadc29d3e",
                "name": "ready for assembly",
                "utcStart": 1414796400000,
                "utcEnd": 1414796400000,
                "progress": 50,
                "step": 1,
                "color": "0099C6"
            },
            {
                "id": "d83c1f5e-11ce-4e06-91d0-1ff27df49600",
                "name": "installed",
                "utcStart": 1414796400000,
                "utcEnd": 1414796400000,
                "progress": 50,
                "step": 4,
                "color": "AAAA11"
            }
        ],
        "structurePath": [
            "Second Floor",
            "section A"
        ]
    },
    {
        "id": "3781b28b-6380-4723-bfd6-4143eaf3baed",
        "name": "Discounter 3",
        "code": "S 0.10",
        "description": "Shop",
        "utcDate": 1412892000000,
        "category": "ROOM",
        "activities": [
            {
                "id": "03226c2f-242e-4383-b76a-2e5f883a979d",
                "name": "delivered",
                "utcStart": 1412892000000,
                "utcEnd": 1412892000000,
                "progress": 100,
                "step": 3,
                "color": "316395"
            },
            {
                "id": "13eda0ec-695f-463e-c6ed-56a1cfb4c78f",
                "name": "installed",
                "utcStart": 1412892000000,
                "utcEnd": 1412892000000,
                "progress": 100,
                "step": 4,
                "color": "AAAA11"
            },
            {
                "id": "198381aa-76ab-4234-ba91-c11d5516cdf7",
                "name": "dispatched",
                "utcStart": 1412892000000,
                "utcEnd": 1412892000000,
                "progress": 100,
                "step": 2,
                "color": "329262"
            },
            {
                "id": "1f2e616f-b45a-48c2-e792-a94f6ba21405",
                "name": "Connectors Down installed",
                "utcStart": 1412892000000,
                "utcEnd": 1412892000000,
                "progress": 100,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "2d4ae0a0-13dc-4c06-ddfa-0012fc239f8f",
                "name": "ready for assembly",
                "utcStart": 1412892000000,
                "utcEnd": 1412892000000,
                "progress": 100,
                "step": 1,
                "color": "0099C6"
            },
            {
                "id": "37ce4ded-48f8-4e47-8c64-134083db6506",
                "name": "Slings Down installed",
                "utcStart": 1412892000000,
                "utcEnd": 1412892000000,
                "progress": 100,
                "step": 6,
                "color": "994499"
            },
            {
                "id": "c5078c39-1e14-46a2-cfc2-5e0b4eba9d1a",
                "name": "Slings Up installed",
                "utcStart": 1412892000000,
                "utcEnd": 1412892000000,
                "progress": 100,
                "step": 6,
                "color": "AAAA11"
            },
            {
                "id": "d234ba20-79a6-4d72-a0dd-17931eca6652",
                "name": "Connectors Up installed",
                "utcStart": 1412892000000,
                "utcEnd": 1412892000000,
                "progress": 100,
                "step": 5,
                "color": "3B3EAC"
            }
        ],
        "structurePath": [
            "section C",
            "Ground Floor"
        ]
    },
    {
        "id": "3a9a0c4c-787a-42ed-8d30-c860315f588e",
        "name": "Technical Equipment T 0.5",
        "code": "T 0.5",
        "description": "Technical Equipment",
        "utcDate": 1415919600000,
        "category": "ROOM",
        "activities": [
            {
                "id": "00f55000-5b2f-48b9-d229-37bfe34c4dc4",
                "name": "Connectors Up installed",
                "utcStart": 1415919600000,
                "utcEnd": 1415919600000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "02af7957-60a6-4404-b7a6-439e0c89190f",
                "name": "Slings Up installed",
                "utcStart": 1415919600000,
                "utcEnd": 1415919600000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            },
            {
                "id": "0ef1df5b-10f1-4ccb-9644-58d9e1e0609d",
                "name": "Slings Down installed",
                "utcStart": 1415919600000,
                "utcEnd": 1415919600000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            },
            {
                "id": "202c5f82-92f5-45cf-a2c3-e6e5615ac08f",
                "name": "installed",
                "utcStart": 1415919600000,
                "utcEnd": 1415919600000,
                "progress": 0,
                "step": 4,
                "color": "AAAA11"
            },
            {
                "id": "26c70bab-394c-4479-d0c8-bd0c508121e4",
                "name": "delivered",
                "utcStart": 1415919600000,
                "utcEnd": 1415919600000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            },
            {
                "id": "28e81e1f-6089-410f-b2b4-efa3bd89d6a7",
                "name": "dispatched",
                "utcStart": 1415919600000,
                "utcEnd": 1415919600000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            },
            {
                "id": "a78d92b1-d2c5-42d3-b2e6-c0fb23272307",
                "name": "ready for assembly",
                "utcStart": 1415919600000,
                "utcEnd": 1415919600000,
                "progress": 0,
                "step": 1,
                "color": "0099C6"
            },
            {
                "id": "fc2651cd-b82e-4757-af95-68947e2b1a0f",
                "name": "Connectors Down installed",
                "utcStart": 1415919600000,
                "utcEnd": 1415919600000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            }
        ],
        "structurePath": [
            "Ground Floor",
            "section B"
        ]
    },
    {
        "id": "3d9d391a-2f4f-4eb3-a318-9642ffad7364",
        "name": "Moonbucks 1",
        "code": "C 0.3",
        "description": "Cafe",
        "utcDate": 1416956400000,
        "category": "ROOM",
        "activities": [
            {
                "id": "0d304ff3-d668-46a0-de7b-cf697db12f47",
                "name": "installed",
                "utcStart": 1416956400000,
                "utcEnd": 1416956400000,
                "progress": 0,
                "step": 4,
                "color": "AAAA11"
            },
            {
                "id": "33eda9fa-cb39-4ed8-d86d-0e90b3d0316b",
                "name": "Slings Up installed",
                "utcStart": 1416956400000,
                "utcEnd": 1416956400000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            },
            {
                "id": "4d072e4c-540c-4192-abac-0207b08a7789",
                "name": "ready for assembly",
                "utcStart": 1416956400000,
                "utcEnd": 1416956400000,
                "progress": 0,
                "step": 1,
                "color": "0099C6"
            },
            {
                "id": "7412354a-51ee-42a6-cc17-5e703bad4f2a",
                "name": "Connectors Up installed",
                "utcStart": 1416956400000,
                "utcEnd": 1416956400000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "d5ac9f54-dcb8-4996-f138-32879f533cb8",
                "name": "dispatched",
                "utcStart": 1416956400000,
                "utcEnd": 1416956400000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            },
            {
                "id": "e9419332-28c1-4b78-db51-e4ccc16dee5c",
                "name": "Connectors Down installed",
                "utcStart": 1416956400000,
                "utcEnd": 1416956400000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "e9ed3f13-b5cc-4e26-cf5c-d42f96047d4e",
                "name": "Slings Down installed",
                "utcStart": 1416956400000,
                "utcEnd": 1416956400000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            },
            {
                "id": "ed04e5c0-6fe4-410c-f7eb-1fe74a6d34d9",
                "name": "delivered",
                "utcStart": 1416956400000,
                "utcEnd": 1416956400000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            }
        ],
        "structurePath": [
            "Ground Floor",
            "section A"
        ]
    },
    {
        "id": "3e511bf6-f684-443a-f417-41f84b00c5f6",
        "name": "Storage Room SR 0.2",
        "code": "SR 0.2",
        "description": "Storage Room",
        "utcDate": 1417906800000,
        "category": "ROOM",
        "activities": [
            {
                "id": "060f4a30-fabe-4a4c-96d4-d90fb285600f",
                "name": "installed",
                "utcStart": 1417906800000,
                "utcEnd": 1417906800000,
                "progress": 0,
                "step": 4,
                "color": "AAAA11"
            },
            {
                "id": "32eaaaaa-e156-4eb2-9c23-75e1c4063815",
                "name": "ready for assembly",
                "utcStart": 1417906800000,
                "utcEnd": 1417906800000,
                "progress": 0,
                "step": 1,
                "color": "0099C6"
            },
            {
                "id": "736924a1-0b17-4792-b247-4cb7fb9b8469",
                "name": "Connectors Up installed",
                "utcStart": 1417906800000,
                "utcEnd": 1417906800000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "81a15add-da41-43e8-9b98-1bd596fb8e6e",
                "name": "Slings Up installed",
                "utcStart": 1417906800000,
                "utcEnd": 1417906800000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            },
            {
                "id": "9d2a756e-b526-4484-c6d0-ee3f1b6785e0",
                "name": "Connectors Down installed",
                "utcStart": 1417906800000,
                "utcEnd": 1417906800000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "adb8d2c8-e6a5-43e8-fa5f-77f480e0b815",
                "name": "Slings Down installed",
                "utcStart": 1417906800000,
                "utcEnd": 1417906800000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            },
            {
                "id": "d9d3cf26-dcfb-4afc-a761-86fdbb275583",
                "name": "delivered",
                "utcStart": 1417906800000,
                "utcEnd": 1417906800000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            },
            {
                "id": "ecaeb4d9-465a-481b-9bab-8f11f5780760",
                "name": "dispatched",
                "utcStart": 1417906800000,
                "utcEnd": 1417906800000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            }
        ],
        "structurePath": [
            "Ground Floor",
            "section A"
        ]
    },
    {
        "id": "40065103-2926-459b-b277-bb9968320207",
        "name": "Storage Room SR 2.3",
        "code": "SR 2.3",
        "description": "Storage Room",
        "utcDate": 1419202800000,
        "category": "ROOM",
        "activities": [
            {
                "id": "19ec0507-d79d-4a4e-c75c-942dcc9ba79a",
                "name": "Slings Up installed",
                "utcStart": 1419202800000,
                "utcEnd": 1419202800000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            },
            {
                "id": "45e4b2ee-2f1c-4d48-e49b-e683ba107157",
                "name": "ready for assembly",
                "utcStart": 1419202800000,
                "utcEnd": 1419202800000,
                "progress": 0,
                "step": 1,
                "color": "0099C6"
            },
            {
                "id": "53adb2e4-8625-4b3e-d90c-3d78f68f4a14",
                "name": "Connectors Down installed",
                "utcStart": 1419202800000,
                "utcEnd": 1419202800000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "661bf35a-13d7-42ef-e345-3f6460f820f4",
                "name": "installed",
                "utcStart": 1419202800000,
                "utcEnd": 1419202800000,
                "progress": 100,
                "step": 4,
                "color": "AAAA11"
            },
            {
                "id": "a1c9c365-0a08-4147-9ad9-21c8f66c14b6",
                "name": "dispatched",
                "utcStart": 1419202800000,
                "utcEnd": 1419202800000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            },
            {
                "id": "c506e265-ab62-4b5c-e73a-1118d6e0af3e",
                "name": "Connectors Up installed",
                "utcStart": 1419202800000,
                "utcEnd": 1419202800000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "c52f4c29-42f5-4ec5-811d-50d05b134633",
                "name": "delivered",
                "utcStart": 1419202800000,
                "utcEnd": 1419202800000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            },
            {
                "id": "d8ce87f8-7684-4d89-b6f8-48afda27e219",
                "name": "Slings Down installed",
                "utcStart": 1419202800000,
                "utcEnd": 1419202800000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            }
        ],
        "structurePath": [
            "Second Floor",
            "section A"
        ]
    },
    {
        "id": "4016095a-cd94-406f-e759-ecf9fa4f6a78",
        "name": "Technical Equipment T 2.3",
        "code": "T 2.3",
        "description": "Technical Equipment",
        "utcDate": 1416697200000,
        "category": "ROOM",
        "activities": [
            {
                "id": "2187ca29-07c0-411d-9575-a4d03df6cf8d",
                "name": "Slings Up installed",
                "utcStart": 1416697200000,
                "utcEnd": 1416697200000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            },
            {
                "id": "3b974045-51e4-4ecb-948f-e9cd2b2baa68",
                "name": "dispatched",
                "utcStart": 1416697200000,
                "utcEnd": 1416697200000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            },
            {
                "id": "7d94424d-86f1-457c-9e35-b9700a4758b9",
                "name": "installed",
                "utcStart": 1416697200000,
                "utcEnd": 1416697200000,
                "progress": 0,
                "step": 4,
                "color": "AAAA11"
            },
            {
                "id": "a82258ca-0a2b-47c6-f8ae-52cfc9a9bf76",
                "name": "ready for assembly",
                "utcStart": 1416697200000,
                "utcEnd": 1416697200000,
                "progress": 0,
                "step": 1,
                "color": "0099C6"
            },
            {
                "id": "b2538ffa-67f6-470e-f424-6f3aa9594d20",
                "name": "Connectors Up installed",
                "utcStart": 1416697200000,
                "utcEnd": 1416697200000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "d4f1209d-ed65-4426-fb5e-476910d4dd5f",
                "name": "Slings Down installed",
                "utcStart": 1416697200000,
                "utcEnd": 1416697200000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            },
            {
                "id": "f0b97e46-da01-46dc-fe31-94f33b7c3724",
                "name": "Connectors Down installed",
                "utcStart": 1416697200000,
                "utcEnd": 1416697200000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "f3678eff-6a75-4b7d-c9ef-b8ba4575aa80",
                "name": "delivered",
                "utcStart": 1416697200000,
                "utcEnd": 1416697200000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            }
        ],
        "structurePath": [
            "section C",
            "Ground Floor"
        ]
    },
    {
        "id": "403f1eda-7ce4-403e-de44-7c3c0ab802df",
        "name": "Storage Room SR 1.3",
        "code": "SR 1.3",
        "description": "Storage Room",
        "utcDate": 1418511600000,
        "category": "ROOM",
        "activities": [
            {
                "id": "364d7e7e-7377-4bd0-ffee-ed0c1523d2f3",
                "name": "ready for assembly",
                "utcStart": 1418511600000,
                "utcEnd": 1418511600000,
                "progress": 0,
                "step": 1,
                "color": "0099C6"
            },
            {
                "id": "5df347ea-f86c-4a6a-a9b7-1cfa7ac90b60",
                "name": "Slings Up installed",
                "utcStart": 1418511600000,
                "utcEnd": 1418511600000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            },
            {
                "id": "807d6d61-5fdc-4793-d81f-67668e32cbba",
                "name": "Connectors Down installed",
                "utcStart": 1418511600000,
                "utcEnd": 1418511600000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "8fbf87e3-daaa-4d37-a5a7-4b174e33e00d",
                "name": "dispatched",
                "utcStart": 1418511600000,
                "utcEnd": 1418511600000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            },
            {
                "id": "98acfb55-3659-4777-83a8-5de7782063c9",
                "name": "Slings Down installed",
                "utcStart": 1418511600000,
                "utcEnd": 1418511600000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            },
            {
                "id": "98bb5f0c-28ac-413f-c841-5cb0fa04f9c2",
                "name": "Connectors Up installed",
                "utcStart": 1418511600000,
                "utcEnd": 1418511600000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "a9876997-89a6-4871-90f6-e979f4faf2c6",
                "name": "installed",
                "utcStart": 1418511600000,
                "utcEnd": 1418511600000,
                "progress": 0,
                "step": 4,
                "color": "AAAA11"
            },
            {
                "id": "b5fc470e-8dfb-450e-8f9d-4a098a27a68b",
                "name": "delivered",
                "utcStart": 1418511600000,
                "utcEnd": 1418511600000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            }
        ],
        "structurePath": [
            "First Floor",
            "section A"
        ]
    },
    {
        "id": "42d9481e-20ac-4501-de8e-68c32ff9b4e2",
        "name": "Shoemaker Shoes 1",
        "code": "S 1.11",
        "description": "Shop",
        "utcDate": 1414015200000,
        "category": "ROOM",
        "activities": [
            {
                "id": "3e514529-fb65-43ec-febe-1e7515d196ef",
                "name": "installed",
                "utcStart": 1414015200000,
                "utcEnd": 1414015200000,
                "progress": 0,
                "step": 4,
                "color": "AAAA11"
            },
            {
                "id": "605489af-9f03-41b5-fb36-a8c4ef3c4f13",
                "name": "Connectors Up installed",
                "utcStart": 1414015200000,
                "utcEnd": 1414015200000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "7ccbe90d-3444-485c-96cc-6dcff69cf92b",
                "name": "ready for assembly",
                "utcStart": 1414015200000,
                "utcEnd": 1414015200000,
                "progress": 0,
                "step": 1,
                "color": "0099C6"
            },
            {
                "id": "8316f673-fe76-4533-f43f-d9a437ba8c59",
                "name": "Slings Up installed",
                "utcStart": 1414015200000,
                "utcEnd": 1414015200000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            },
            {
                "id": "8d317a03-c66b-481e-a2e0-b194dc8f76a5",
                "name": "Connectors Down installed",
                "utcStart": 1414015200000,
                "utcEnd": 1414015200000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "9cc235fb-59e7-46ad-c244-b23131210636",
                "name": "dispatched",
                "utcStart": 1414015200000,
                "utcEnd": 1414015200000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            },
            {
                "id": "a0b96d97-b50f-4e71-c9d9-d1b55775caf8",
                "name": "delivered",
                "utcStart": 1414015200000,
                "utcEnd": 1414015200000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            },
            {
                "id": "efe4e691-d192-4f73-d0da-c622ad32500d",
                "name": "Slings Down installed",
                "utcStart": 1414015200000,
                "utcEnd": 1414015200000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            }
        ],
        "structurePath": [
            "section C",
            "First Floor"
        ]
    },
    {
        "id": "4353f48c-5a7a-44f5-9242-0515de606a0d",
        "name": "Storage Room SR 1.7",
        "code": "SR 1.7",
        "description": "Storage Room",
        "utcDate": 1418857200000,
        "category": "ROOM",
        "activities": [
            {
                "id": "089022e7-296a-4d1d-a186-53c87d3cca73",
                "name": "Slings Up installed",
                "utcStart": 1418857200000,
                "utcEnd": 1418857200000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            },
            {
                "id": "147565a2-006f-4104-9cb9-ad1881e06dd9",
                "name": "Connectors Up installed",
                "utcStart": 1418857200000,
                "utcEnd": 1418857200000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "2f0a3a3c-894a-489f-c5a1-c86abb437368",
                "name": "Slings Down installed",
                "utcStart": 1418857200000,
                "utcEnd": 1418857200000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            },
            {
                "id": "39a7eea8-4dd4-492c-b550-26d670d78912",
                "name": "Connectors Down installed",
                "utcStart": 1418857200000,
                "utcEnd": 1418857200000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "40f4e1ea-9c3b-4604-94c7-6e8e06581f3d",
                "name": "dispatched",
                "utcStart": 1418857200000,
                "utcEnd": 1418857200000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            },
            {
                "id": "5ff7f45d-8a14-45ac-a348-979ca3296a49",
                "name": "ready for assembly",
                "utcStart": 1418857200000,
                "utcEnd": 1418857200000,
                "progress": 0,
                "step": 1,
                "color": "0099C6"
            },
            {
                "id": "c2e8f018-490c-4586-b879-25e1d0dfc8c3",
                "name": "installed",
                "utcStart": 1418857200000,
                "utcEnd": 1418857200000,
                "progress": 0,
                "step": 4,
                "color": "AAAA11"
            },
            {
                "id": "e8f5b3d7-7c9b-45dc-aa0e-5fc01804e950",
                "name": "delivered",
                "utcStart": 1418857200000,
                "utcEnd": 1418857200000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            }
        ],
        "structurePath": [
            "section C",
            "First Floor"
        ]
    },
    {
        "id": "4750ebee-127c-4b88-f623-71809b8717c8",
        "name": "Storage Room SR 0.5",
        "code": "SR 0.5",
        "description": "Storage Room",
        "utcDate": 1418166000000,
        "category": "ROOM",
        "activities": [
            {
                "id": "1c851979-9534-429f-b23e-813b10ec47db",
                "name": "Slings Up installed",
                "utcStart": 1418166000000,
                "utcEnd": 1418166000000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            },
            {
                "id": "2349c49c-a922-4435-8fa3-99d67a6c19ff",
                "name": "Connectors Up installed",
                "utcStart": 1418166000000,
                "utcEnd": 1418166000000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "57b5988f-9ecd-4668-a2f8-38c2a20c714c",
                "name": "installed",
                "utcStart": 1418166000000,
                "utcEnd": 1418166000000,
                "progress": 0,
                "step": 4,
                "color": "AAAA11"
            },
            {
                "id": "6e888165-739f-4bf0-81d8-d867fba199ba",
                "name": "delivered",
                "utcStart": 1418166000000,
                "utcEnd": 1418166000000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            },
            {
                "id": "74c7fb31-ee4b-4719-ee31-e9e8eed33071",
                "name": "Slings Down installed",
                "utcStart": 1418166000000,
                "utcEnd": 1418166000000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            },
            {
                "id": "8a6ed2c1-d20e-4fec-f610-9ea648477a43",
                "name": "Connectors Down installed",
                "utcStart": 1418166000000,
                "utcEnd": 1418166000000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "a481fe16-00c7-4723-8a0c-2c2b65c06995",
                "name": "ready for assembly",
                "utcStart": 1418166000000,
                "utcEnd": 1418166000000,
                "progress": 0,
                "step": 1,
                "color": "0099C6"
            },
            {
                "id": "c9c2330e-5568-44f9-ffec-20e801c69f59",
                "name": "dispatched",
                "utcStart": 1418166000000,
                "utcEnd": 1418166000000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            }
        ],
        "structurePath": [
            "section C",
            "Ground Floor"
        ]
    },
    {
        "id": "4c8cf8aa-5dfa-404f-97d6-c52ac6d18bd1",
        "name": "German Apparel 1",
        "code": "S 1.4",
        "description": "Shop",
        "utcDate": 1413410400000,
        "category": "ROOM",
        "activities": [
            {
                "id": "332d5698-8eaf-42c3-81c8-08b2448695ec",
                "name": "installed",
                "utcStart": 1413410400000,
                "utcEnd": 1413410400000,
                "progress": 0,
                "step": 4,
                "color": "AAAA11"
            },
            {
                "id": "52a863f4-27db-4d77-9d4d-6d808ad7a793",
                "name": "Slings Down installed",
                "utcStart": 1413410400000,
                "utcEnd": 1413410400000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            },
            {
                "id": "5c27b2a3-fc37-4639-a612-ee44026040d0",
                "name": "dispatched",
                "utcStart": 1413410400000,
                "utcEnd": 1413410400000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            },
            {
                "id": "70f4c6d6-c090-43f3-f282-4940b14c0047",
                "name": "Connectors Down installed",
                "utcStart": 1413410400000,
                "utcEnd": 1413410400000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "baa4d366-3fef-4b45-d0da-a8ca40e91166",
                "name": "Slings Up installed",
                "utcStart": 1413410400000,
                "utcEnd": 1413410400000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            },
            {
                "id": "bbb36de2-7d4e-4531-aa90-dbbc5c79787b",
                "name": "Connectors Up installed",
                "utcStart": 1413410400000,
                "utcEnd": 1413410400000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "db8af5f0-9bef-477c-8f2d-e5bae7c7b386",
                "name": "delivered",
                "utcStart": 1413410400000,
                "utcEnd": 1413410400000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            },
            {
                "id": "ec0204e2-a8b3-495b-d5c4-b6de8044c492",
                "name": "ready for assembly",
                "utcStart": 1413410400000,
                "utcEnd": 1413410400000,
                "progress": 0,
                "step": 1,
                "color": "0099C6"
            }
        ],
        "structurePath": [
            "section B",
            "First Floor"
        ]
    },
    {
        "id": "50e31a49-ad48-4904-b0b0-e19bf29711fc",
        "name": "Technical Equipment T 0.1",
        "code": "T 0.1",
        "description": "Technical Equipment",
        "utcDate": 1415574000000,
        "category": "ROOM",
        "activities": [
            {
                "id": "21cdf2b1-0e5b-4a5f-c519-c49005213c06",
                "name": "installed",
                "utcStart": 1415574000000,
                "utcEnd": 1415574000000,
                "progress": 0,
                "step": 4,
                "color": "AAAA11"
            },
            {
                "id": "28ff9eab-996b-4f1b-bd48-942d912a3e9a",
                "name": "delivered",
                "utcStart": 1415574000000,
                "utcEnd": 1415574000000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            },
            {
                "id": "6f5637d9-951a-4296-ea9a-8c2ddabc8729",
                "name": "Slings Up installed",
                "utcStart": 1415574000000,
                "utcEnd": 1415574000000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            },
            {
                "id": "75e491c1-4056-46f6-b6d7-769f3cf14cc5",
                "name": "dispatched",
                "utcStart": 1415574000000,
                "utcEnd": 1415574000000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            },
            {
                "id": "84dae30d-d0a5-415c-d453-1044c9f07082",
                "name": "Connectors Up installed",
                "utcStart": 1415574000000,
                "utcEnd": 1415574000000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "87d50142-4288-432d-89a7-906376ef0ec1",
                "name": "Slings Down installed",
                "utcStart": 1415574000000,
                "utcEnd": 1415574000000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            },
            {
                "id": "938ccf97-e67b-4f2f-9c18-a9b52e7d83ab",
                "name": "ready for assembly",
                "utcStart": 1415574000000,
                "utcEnd": 1415574000000,
                "progress": 0,
                "step": 1,
                "color": "0099C6"
            },
            {
                "id": "f33524b1-9cd3-4824-c7f4-720a519f3f55",
                "name": "Connectors Down installed",
                "utcStart": 1415574000000,
                "utcEnd": 1415574000000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            }
        ],
        "structurePath": [
            "Ground Floor",
            "section A"
        ]
    },
    {
        "id": "5317be68-8cba-45c3-8d9b-0e5145d04de7",
        "name": "Sasha's S1 Food",
        "code": "C 0.1",
        "description": "Cafe",
        "utcDate": 1416783600000,
        "category": "ROOM",
        "activities": [
            {
                "id": "1b470528-a8c8-4802-f46c-17a861671fb7",
                "name": "installed",
                "utcStart": 1416783600000,
                "utcEnd": 1416783600000,
                "progress": 0,
                "step": 4,
                "color": "AAAA11"
            },
            {
                "id": "1fb21546-c080-45a0-bc08-d6914f817faa",
                "name": "Slings Up installed",
                "utcStart": 1416783600000,
                "utcEnd": 1416783600000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            },
            {
                "id": "45c4bcd7-5ec6-470d-d311-1b1d113cebf9",
                "name": "Connectors Up installed",
                "utcStart": 1416783600000,
                "utcEnd": 1416783600000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "47e5f7a7-f61e-4c70-9e8c-2099e540f39c",
                "name": "delivered",
                "utcStart": 1416783600000,
                "utcEnd": 1416783600000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            },
            {
                "id": "5ed37337-a756-46a2-f30c-bc00efc01af9",
                "name": "Connectors Down installed",
                "utcStart": 1416783600000,
                "utcEnd": 1416783600000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "92c320dc-23af-4184-c880-a45daf457b87",
                "name": "dispatched",
                "utcStart": 1416783600000,
                "utcEnd": 1416783600000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            },
            {
                "id": "a6aaad1d-e968-4618-f4e9-423dc12fa4ce",
                "name": "ready for assembly",
                "utcStart": 1416783600000,
                "utcEnd": 1416783600000,
                "progress": 0,
                "step": 1,
                "color": "0099C6"
            },
            {
                "id": "e209a483-288b-45b0-9c28-55a7c5f42a79",
                "name": "Slings Down installed",
                "utcStart": 1416783600000,
                "utcEnd": 1416783600000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            }
        ],
        "structurePath": [
            "Ground Floor",
            "section A"
        ]
    },
    {
        "id": "53dfcb5a-a8ae-4fce-f5ca-0984e1c6baf4",
        "name": "Hugo Chef",
        "code": "S 1.7",
        "description": "Shop",
        "utcDate": 1413669600000,
        "category": "ROOM",
        "activities": [
            {
                "id": "20983849-5b4e-4d34-d20c-870a3a847738",
                "name": "Connectors Up installed",
                "utcStart": 1413669600000,
                "utcEnd": 1413669600000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "23fe142e-7823-4cce-99ef-1945656558e3",
                "name": "Slings Up installed",
                "utcStart": 1413669600000,
                "utcEnd": 1413669600000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            },
            {
                "id": "576b4a36-6d09-402b-9767-2ea9d300f8f4",
                "name": "Slings Down installed",
                "utcStart": 1413669600000,
                "utcEnd": 1413669600000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            },
            {
                "id": "5ed6ece2-7f20-4815-af74-4cda4f424aa5",
                "name": "Connectors Down installed",
                "utcStart": 1413669600000,
                "utcEnd": 1413669600000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "745522a6-b189-44fa-f8db-639d58849cdb",
                "name": "dispatched",
                "utcStart": 1413669600000,
                "utcEnd": 1413669600000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            },
            {
                "id": "c3534104-fd38-4b0e-b587-4e8a11c73487",
                "name": "delivered",
                "utcStart": 1413669600000,
                "utcEnd": 1413669600000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            },
            {
                "id": "d6873345-f14b-40fb-ab4a-6db2bb859fb7",
                "name": "ready for assembly",
                "utcStart": 1413669600000,
                "utcEnd": 1413669600000,
                "progress": 0,
                "step": 1,
                "color": "0099C6"
            },
            {
                "id": "ff4fc4f3-b1c5-4b9a-c0c4-86edbbcbb92e",
                "name": "installed",
                "utcStart": 1413669600000,
                "utcEnd": 1413669600000,
                "progress": 0,
                "step": 4,
                "color": "AAAA11"
            }
        ],
        "structurePath": [
            "section B",
            "First Floor"
        ]
    },
    {
        "id": "586f8340-423c-48e9-e398-16046c662025",
        "name": "Jupiter 2",
        "code": "S 2.7",
        "description": "Shop",
        "utcDate": 1415142000000,
        "category": "ROOM",
        "activities": [
            {
                "id": "101096e4-0ca4-4e3b-a2f2-1c07a5bb3272",
                "name": "ready for assembly",
                "utcStart": 1415142000000,
                "utcEnd": 1415142000000,
                "progress": 0,
                "step": 1,
                "color": "0099C6"
            },
            {
                "id": "3be75aab-10a0-41b5-9245-6ba208e041ab",
                "name": "Slings Up installed",
                "utcStart": 1415142000000,
                "utcEnd": 1415142000000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            },
            {
                "id": "4ca219b1-860e-4a23-e402-a64adcc7a0ef",
                "name": "Slings Down installed",
                "utcStart": 1415142000000,
                "utcEnd": 1415142000000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            },
            {
                "id": "5cb98bf8-2d58-4098-83f6-177e633d6097",
                "name": "Connectors Down installed",
                "utcStart": 1415142000000,
                "utcEnd": 1415142000000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "68cee232-17ea-42b4-e85d-f46289c37c12",
                "name": "Connectors Up installed",
                "utcStart": 1415142000000,
                "utcEnd": 1415142000000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "d9a6e48e-380f-4fa3-b025-9a25f80d4900",
                "name": "delivered",
                "utcStart": 1415142000000,
                "utcEnd": 1415142000000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            },
            {
                "id": "db1d9e10-613a-4af8-a97b-c4fa3912e3c9",
                "name": "installed",
                "utcStart": 1415142000000,
                "utcEnd": 1415142000000,
                "progress": 0,
                "step": 4,
                "color": "AAAA11"
            },
            {
                "id": "eb4b956a-1962-4221-8854-029a70e203e8",
                "name": "dispatched",
                "utcStart": 1415142000000,
                "utcEnd": 1415142000000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            }
        ],
        "structurePath": [
            "Second Floor",
            "section B 2"
        ]
    },
    {
        "id": "5de782d5-e122-49a3-9405-206afc16a57f",
        "name": "Fiona's Fish Restaurant",
        "code": "C 0.2",
        "description": "Cafe",
        "utcDate": 1416870000000,
        "category": "ROOM",
        "activities": [
            {
                "id": "0090b365-f4de-46da-e5c1-cf4f2f5c423a",
                "name": "dispatched",
                "utcStart": 1416870000000,
                "utcEnd": 1416870000000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            },
            {
                "id": "228e31cc-4421-4cbb-9815-c266a7175701",
                "name": "Slings Up installed",
                "utcStart": 1416870000000,
                "utcEnd": 1416870000000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            },
            {
                "id": "34ad90d9-a267-4c71-c9e5-c37a128f126f",
                "name": "ready for assembly",
                "utcStart": 1416870000000,
                "utcEnd": 1416870000000,
                "progress": 0,
                "step": 1,
                "color": "0099C6"
            },
            {
                "id": "4719ce29-aec3-4cab-f133-fde651ae9690",
                "name": "delivered",
                "utcStart": 1416870000000,
                "utcEnd": 1416870000000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            },
            {
                "id": "869bde1f-5fab-4965-bbd1-c0fe1d17cd02",
                "name": "installed",
                "utcStart": 1416870000000,
                "utcEnd": 1416870000000,
                "progress": 0,
                "step": 4,
                "color": "AAAA11"
            },
            {
                "id": "98931d81-fdb2-40cf-8ef4-5c6ad600c49e",
                "name": "Connectors Up installed",
                "utcStart": 1416870000000,
                "utcEnd": 1416870000000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "bdaea95f-d580-4f7d-da2c-a95b2e83b63e",
                "name": "Connectors Down installed",
                "utcStart": 1416870000000,
                "utcEnd": 1416870000000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "d56b8aa6-4b9e-4b6d-cbe2-f0a5b3169934",
                "name": "Slings Down installed",
                "utcStart": 1416870000000,
                "utcEnd": 1416870000000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            }
        ],
        "structurePath": [
            "Ground Floor",
            "section A"
        ]
    },
    {
        "id": "625a33b8-3689-4e8e-a11f-0729d0046f61",
        "name": "Storage Room SR 0.6",
        "code": "SR 0.6",
        "description": "Storage Room",
        "utcDate": 1418252400000,
        "category": "ROOM",
        "activities": [
            {
                "id": "11aec7b1-b253-49a3-a7e2-9be36cbcd1a6",
                "name": "delivered",
                "utcStart": 1418252400000,
                "utcEnd": 1418252400000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            },
            {
                "id": "12477357-440c-49b3-fe12-85b21cfb11f9",
                "name": "Slings Up installed",
                "utcStart": 1418252400000,
                "utcEnd": 1418252400000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            },
            {
                "id": "1ed9e5ea-95a2-4244-9df8-4cd44417b072",
                "name": "Connectors Up installed",
                "utcStart": 1418252400000,
                "utcEnd": 1418252400000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "6719a86b-cb75-480a-f24d-2fe4a8240025",
                "name": "Slings Down installed",
                "utcStart": 1418252400000,
                "utcEnd": 1418252400000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            },
            {
                "id": "7be6fc7a-b262-4040-b9f3-4b05aa0b3c87",
                "name": "Connectors Down installed",
                "utcStart": 1418252400000,
                "utcEnd": 1418252400000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "acdad960-83d3-4fc1-86e8-7a8528f9bdef",
                "name": "installed",
                "utcStart": 1418252400000,
                "utcEnd": 1418252400000,
                "progress": 0,
                "step": 4,
                "color": "AAAA11"
            },
            {
                "id": "e48cc387-4e03-47a7-c87a-4a87c612639c",
                "name": "ready for assembly",
                "utcStart": 1418252400000,
                "utcEnd": 1418252400000,
                "progress": 0,
                "step": 1,
                "color": "0099C6"
            },
            {
                "id": "fa4ff2a5-c79e-4017-af69-adade7797c12",
                "name": "dispatched",
                "utcStart": 1418252400000,
                "utcEnd": 1418252400000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            }
        ],
        "structurePath": [
            "section C",
            "Ground Floor"
        ]
    },
    {
        "id": "64a47336-3db1-4237-9ac2-f434121aacae",
        "name": "Storage Room SR 1.1",
        "code": "SR 1.1",
        "description": "Storage Room",
        "utcDate": 1418338800000,
        "category": "ROOM",
        "activities": [
            {
                "id": "23fc97a7-ed22-4243-fd7b-d234afa3414d",
                "name": "installed",
                "utcStart": 1418338800000,
                "utcEnd": 1418338800000,
                "progress": 0,
                "step": 4,
                "color": "AAAA11"
            },
            {
                "id": "71abc9d0-444d-4a90-d6f8-ab6451e68777",
                "name": "Slings Up installed",
                "utcStart": 1418338800000,
                "utcEnd": 1418338800000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            },
            {
                "id": "7ef6dba6-099c-470e-86a3-48fa6beca276",
                "name": "Slings Down installed",
                "utcStart": 1418338800000,
                "utcEnd": 1418338800000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            },
            {
                "id": "846032b4-afa7-42bb-d998-8673d7ff882a",
                "name": "dispatched",
                "utcStart": 1418338800000,
                "utcEnd": 1418338800000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            },
            {
                "id": "a3ff81f3-6e43-4712-f4f1-d15492d13032",
                "name": "Connectors Up installed",
                "utcStart": 1418338800000,
                "utcEnd": 1418338800000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "da4cd4fd-63d7-49cf-8f18-9ba912daaf8e",
                "name": "Connectors Down installed",
                "utcStart": 1418338800000,
                "utcEnd": 1418338800000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "dee9bf27-bc35-4372-cc5c-73bf41ec02ce",
                "name": "delivered",
                "utcStart": 1418338800000,
                "utcEnd": 1418338800000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            },
            {
                "id": "f157470c-a08a-451b-bf67-634cc721d798",
                "name": "ready for assembly",
                "utcStart": 1418338800000,
                "utcEnd": 1418338800000,
                "progress": 0,
                "step": 1,
                "color": "0099C6"
            }
        ],
        "structurePath": [
            "First Floor",
            "section A"
        ]
    },
    {
        "id": "6656dba8-f4b0-4870-b502-1e66e3dc388e",
        "name": "Storage Room SR 2.2",
        "code": "SR 2.2",
        "description": "Storage Room",
        "utcDate": 1419116400000,
        "category": "ROOM",
        "activities": [
            {
                "id": "013649d2-f60f-4888-ff20-b120df6196f6",
                "name": "Slings Up installed",
                "utcStart": 1419116400000,
                "utcEnd": 1419116400000,
                "progress": 0,
                "step": 6,
                "color": "AAAA11"
            },
            {
                "id": "160b9b28-160c-42b5-c13d-d01edec52987",
                "name": "ready for assembly",
                "utcStart": 1419116400000,
                "utcEnd": 1419116400000,
                "progress": 0,
                "step": 1,
                "color": "0099C6"
            },
            {
                "id": "23123ef5-86c2-4c79-9365-f8b0688b287c",
                "name": "Connectors Up installed",
                "utcStart": 1419116400000,
                "utcEnd": 1419116400000,
                "progress": 0,
                "step": 5,
                "color": "3B3EAC"
            },
            {
                "id": "2dd80908-f81b-4c3a-e303-db0bdf76da04",
                "name": "dispatched",
                "utcStart": 1419116400000,
                "utcEnd": 1419116400000,
                "progress": 0,
                "step": 2,
                "color": "329262"
            },
            {
                "id": "52ad0c5a-1005-435b-a5ca-9117dfb4b0ff",
                "name": "delivered",
                "utcStart": 1419116400000,
                "utcEnd": 1419116400000,
                "progress": 0,
                "step": 3,
                "color": "316395"
            },
            {
                "id": "54201dcd-4082-4efd-9d7d-a881b02ce450",
                "name": "Connectors Down installed",
                "utcStart": 1419116400000,
                "utcEnd": 1419116400000,
                "progress": 0,
                "step": 5,
                "color": "3366CC"
            },
            {
                "id": "a48f3a72-cefb-4a1a-f566-d218ba6b2751",
                "name": "Slings Down installed",
                "utcStart": 1419116400000,
                "utcEnd": 1419116400000,
                "progress": 0,
                "step": 6,
                "color": "994499"
            },
            {
                "id": "a5e22bf9-7eb7-47bb-a0c0-280f2f3634b4",
                "name": "installed",
                "utcStart": 1419116400000,
                "utcEnd": 1419116400000,
                "progress": 0,
                "step": 4,
                "color": "AAAA11"
            }
        ],
        "structurePath": [
            "Second Floor",
            "section A"
        ]
    }
];

/*var sop = results.map(function(rr){

    return {
        id: rr.ID,
        name: rr.NAME,
        code: rr.CODE,
        description: rr.DESC,
        utcDate: parseFloat(rr.CD),
        category: rr.CATEGORY,
        activities: rr.ACTIVITIES.results.map(function(a){
            return {
                id: a.ID,
                name: a.NAME,
                utcStart: parseFloat(a.SD),
                utcEnd: parseFloat(a.CD),
                progress: a.PROGRESS,
                step: a.TOPOLOGICAL_INDEX,
                color: a.COLOR
            };
        }),
        structurePath: rr.STRUCTURING.results.map(function(s){
            return s.NAME;
        })
    }
});*/