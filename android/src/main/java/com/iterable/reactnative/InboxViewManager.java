package com.iterable.reactnative;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.iterable.iterableapi.ui.inbox.IterableInboxFragment;

import android.widget.FrameLayout;
import android.widget.FrameLayout.LayoutParams;
import androidx.annotation.NonNull;
import androidx.fragment.app.FragmentActivity;

public class InboxViewManager extends SimpleViewManager<FrameLayout> {
    ReactApplicationContext mCallerContext;

    public InboxViewManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
    }

    @NonNull
    @Override
    public String getName() {
        return "RNInboxView";
    }

    @NonNull
    @Override
    protected FrameLayout createViewInstance(@NonNull ThemedReactContext reactContext) {
        final FrameLayout frameLayout = new FrameLayout(mCallerContext);
        IterableInboxFragment fragment = IterableInboxFragment.newInstance();
        // Add the fragment into the FrameLayout
        FragmentActivity fragmentActivity = (FragmentActivity) reactContext.getCurrentActivity();
        fragmentActivity.getSupportFragmentManager()
                .beginTransaction()
                .add(fragment, "MY_TAG")
                .commit();
        // Execute the commit immediately or can use commitNow() instead
        fragmentActivity.getSupportFragmentManager().executePendingTransactions();
        // This step is needed to in order for ReactNative to render your view
        frameLayout.addView(fragment.getView(), LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT);
        return frameLayout;
    }
}
