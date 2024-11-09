import cv2
import mediapipe as mp
import math

# Initialize MediaPipe hands model and drawing utilities
mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils

# Initialize the hands module, detecting hands in real-time
hands = mp_hands.Hands(static_image_mode=False, max_num_hands=2, min_detection_confidence=0.5)

# Initialize webcam feed
cap = cv2.VideoCapture(0)

# Dictionary to map gestures to characters (customize as needed)
gesture_to_char = {
    "Thumbs Up": "Thumbs Up",
    "OK": "OK",
    "Hello": "Hello",
    "Goodbye": "Goodbye",
    # Add more gestures and corresponding characters
}

# Function to calculate the angle between two points
def calculate_angle(x1, y1, x2, y2):
    return math.degrees(math.atan2(y2 - y1, x2 - x1))

# Function to recognize gestures and return the corresponding character
def recognize_gesture(hand_landmarks):
    thumb_tip = hand_landmarks.landmark[mp_hands.HandLandmark.THUMB_TIP]
    thumb_mcp = hand_landmarks.landmark[mp_hands.HandLandmark.THUMB_MCP]
    index_tip = hand_landmarks.landmark[mp_hands.HandLandmark.INDEX_FINGER_TIP]
    middle_tip = hand_landmarks.landmark[mp_hands.HandLandmark.MIDDLE_FINGER_TIP]
    ring_tip = hand_landmarks.landmark[mp_hands.HandLandmark.RING_FINGER_TIP]
    pinky_tip = hand_landmarks.landmark[mp_hands.HandLandmark.PINKY_TIP]
    
    # Calculate angle of thumb relative to the horizontal plane
    thumb_angle = calculate_angle(thumb_mcp.x, thumb_mcp.y, thumb_tip.x, thumb_tip.y)
    
    # Condition for "Thumbs Up" (Thumbs Up): thumb is nearly vertical (around 90 degrees) and above other fingers
    if (thumb_tip.y < index_tip.y and  # Thumb is higher than index finger
        thumb_tip.y < middle_tip.y and  # Thumb is higher than middle finger
        thumb_tip.y < ring_tip.y and    # Thumb is higher than ring finger
        thumb_tip.y < pinky_tip.y and   # Thumb is higher than pinky finger
        abs(thumb_angle) > 80):         # Thumb is nearly vertical (near 90 degrees from horizontal)
        return "Thumbs Up"

    # Condition for "OK" gesture: Thumb and index finger tips are close to each other
    if abs(thumb_tip.x - index_tip.x) < 0.03 and abs(thumb_tip.y - index_tip.y) < 0.03:
        return "OK"

    # Condition for "Hello" gesture: All fingers are extended and thumb is slightly bent
    if (abs(thumb_tip.x - thumb_mcp.x) < 0.05 and  # Thumb is slightly bent
        index_tip.y > thumb_tip.y and  # Index finger is higher than thumb
        middle_tip.y > thumb_tip.y and  # Middle finger is higher than thumb
        ring_tip.y > thumb_tip.y and    # Ring finger is higher than thumb
        pinky_tip.y > thumb_tip.y):     # Pinky finger is higher than thumb
        return "Hello"

    # Condition for "Goodbye" gesture: All fingers are closed and thumb is extended
    if (abs(thumb_tip.x - thumb_mcp.x) > 0.05 and  # Thumb is extended
        index_tip.y < thumb_tip.y and  # Index finger is lower than thumb
        middle_tip.y < thumb_tip.y and  # Middle finger is lower than thumb
        ring_tip.y < thumb_tip.y and    # Ring finger is lower than thumb
        pinky_tip.y < thumb_tip.y):     # Pinky finger is lower than thumb
        return "Goodbye"

    return "Unknown Gesture"

# List to store recognized characters
recognized_chars = []

while cap.isOpened():
    success, image = cap.read()
    if not success:
        print("Ignoring empty camera frame.")
        continue

    # Convert the BGR image to RGB for processing
    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

    # Process the image to detect hand landmarks
    results = hands.process(image_rgb)

    # If hand landmarks are detected
    if results.multi_hand_landmarks:
        for hand_landmarks in results.multi_hand_landmarks:
            # Draw landmarks on the image
            mp_drawing.draw_landmarks(image, hand_landmarks, mp_hands.HAND_CONNECTIONS)
            
            # Recognize gesture and map it to a character
            gesture = recognize_gesture(hand_landmarks)
            if gesture in gesture_to_char:
                char = gesture_to_char[gesture]
                recognized_chars.append(char)  # Add the recognized character
                
                # Show the recognized character on the screen
                cv2.putText(image, f"Recognized: {char}", (10, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2, cv2.LINE_AA)
            else:
                cv2.putText(image, "Gesture not recognized", (10, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2, cv2.LINE_AA)

    # Display the image with annotations
    cv2.imshow('Sign Language Recognition', image)

    # Break the loop when 'q' is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the webcam and close all OpenCV windows
cap.release()
cv2.destroyAllWindows()

# Print the recognized characters (or do something else with them)
print("Recognized Characters:", ''.join(recognized_chars))