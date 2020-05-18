//
//  Created by Tapash Majumder on 5/13/20.
//  Copyright © 2020 Iterable. All rights reserved.
//

import IterableSDK

@objc(InboxViewManager)
class InboxViewManager: RCTViewManager {
    
    override func view() -> UIView! {
        return inboxViewController.view
    }
    
    override class func requiresMainQueueSetup() -> Bool {
        return true
    }

    private let inboxViewController = IterableInboxViewController()
}


