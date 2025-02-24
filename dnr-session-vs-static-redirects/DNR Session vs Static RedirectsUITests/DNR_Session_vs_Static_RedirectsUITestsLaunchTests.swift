//
//  DNR_Session_vs_Static_RedirectsUITestsLaunchTests.swift
//  DNR Session vs Static RedirectsUITests
//
//  Created by Lena Cohen on 2/24/25.
//

import XCTest

final class DNR_Session_vs_Static_RedirectsUITestsLaunchTests: XCTestCase {

    override class var runsForEachTargetApplicationUIConfiguration: Bool {
        true
    }

    override func setUpWithError() throws {
        continueAfterFailure = false
    }

    @MainActor
    func testLaunch() throws {
        let app = XCUIApplication()
        app.launch()

        // Insert steps here to perform after app launch but before taking a screenshot,
        // such as logging into a test account or navigating somewhere in the app

        let attachment = XCTAttachment(screenshot: app.screenshot())
        attachment.name = "Launch Screen"
        attachment.lifetime = .keepAlways
        add(attachment)
    }
}
