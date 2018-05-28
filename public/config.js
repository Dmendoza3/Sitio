/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

var config = {
    apiKey: "AIzaSyD81YNfBNLn4GWQWEiiZeFRCi3wG99Rfe0",
    authDomain: "sublime-spider-203613.firebaseapp.com",
    databaseURL: "https://sublime-spider-203613.firebaseio.com",
    projectId: "sublime-spider-203613",
    storageBucket: "sublime-spider-203613.appspot.com",
    messagingSenderId: "289319060083"
};
firebase.initializeApp(config);

// Google OAuth Client ID, needed to support One-tap sign-up.
// Set to null if One-tap sign-up is not supported.
var CLIENT_ID = null;
